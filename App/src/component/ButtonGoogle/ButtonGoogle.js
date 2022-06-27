import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import IconGoogle from '../../assets/icon/google.svg';
import {styleButton} from './style';
const ButtonGoogle = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styleButton.container} onPress={onPress}>
      <IconGoogle width={25} height={25} />
      <Text style={styleButton.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonGoogle;
