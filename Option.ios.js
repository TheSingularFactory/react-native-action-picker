import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Option = ({label, action, last}) => {
  const optionStyle = (last) ? styles.lastOptionStyle : styles.optionStyle;
  return (
    <TouchableOpacity onPress={action} style={optionStyle}>
      <Text style={styles.optionTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired
};

export default Option;
