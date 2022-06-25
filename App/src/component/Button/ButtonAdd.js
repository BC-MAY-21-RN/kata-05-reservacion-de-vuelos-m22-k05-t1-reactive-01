import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../../assets/icon/plus-solid.svg';
import React from 'react';

const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon width={40} height={40} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
