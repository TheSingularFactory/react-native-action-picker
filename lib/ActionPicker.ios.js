import React, {Component} from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Option from './Option'
import PropTypes from 'prop-types';
import styles from './styles';

class ActionPicker extends Component {

  render() {
    const { onCancelRequest, cancelLabel } = this.props;
    return(
      <Modal
        animationType="fade"
        transparent
        isVisible={this.props.isVisible}
        onRequestClose={() => onCancelRequest()}
      >
        <View style={styles.overlayStyle}>
          <View style={styles.container}>
            {this._renderOptions()}
          </View>

          <TouchableOpacity onPress={onCancelRequest} style={styles.cancelContainer}>
            <Text style={styles.cancelTextStyle}>{cancelLabel || 'Cancel'}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  _renderOptions = () => {
    const { options } = this.props;
    return options.map((option, i) => {
      const last = i === options.length-1;
      return (
        <Option label={option.label} action={option.action} last={last}  key={'option_'+i}/>
      );
    });
  }
}



ActionPicker.propTypes = {
  options: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
  cancelLabel: PropTypes.string,
  onCancelRequest: PropTypes.func.isRequired
};

export {ActionPicker};
