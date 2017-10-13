import React, {Component} from 'react';
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Option from './Option'
import PropTypes from 'prop-types';
import styles from './styles';

class ActionPicker extends Component {

  render() {
    const { onCancelRequest } = this.props;
    return(
      <Modal
        animationType="fade"
        transparent
        visible={this.props.isVisible}
        onRequestClose={() => onCancelRequest()}
      >
        <View style={styles.overlayStyle}>
          <View style={styles.container}>
            <View style={styles.titleContainerStyle}>
              <Text style={styles.titleTextStyle}>{this.props.title || "Options"}</Text>
            </View>
            {this._renderOptions()}
            <Option label={this.props.cancelLabel || 'Cancel'} action={onCancelRequest}/>
          </View>
        </View>
      </Modal>
    );
  }


  _renderOptions = () => {
    const { options } = this.props;
    return options.map((option, i) => {
      return (
        <Option label={option.label} last={false} action={option.action}  key={'option_'+i}/>
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
