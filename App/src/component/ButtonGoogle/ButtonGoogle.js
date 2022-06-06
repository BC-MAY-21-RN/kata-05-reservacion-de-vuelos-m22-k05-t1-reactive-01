import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconGoogle from '../../../assets/icon/google.svg';
import {styleButton} from './style';
const ButtonGoogle = props => {
  return (
    <View style={styleButton.container}>
      <IconGoogle width={25} height={25} />
      <Text style={styleButton.text}>{props.title}</Text>
    </View>
  );
};
export default ButtonGoogle;
