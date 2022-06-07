import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styleButton} from './style';

const ButtonForm = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styleButton.container} onPress={onPress}>
      <Text style={styleButton.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonForm;
