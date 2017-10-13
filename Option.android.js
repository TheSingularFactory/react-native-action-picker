import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Option = ({label, action}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.optionStyle}>
      <Text style={styles.optionTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

Option.propTypes = {
  label: PropTypes.string.isRequired
};

export default Option;
