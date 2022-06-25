import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconGoogle from '../../assets/icon/plus-solid.svg';
import themeStyle from '../../styles/theme.style';
import React from 'react';

const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <IconGoogle style={styles.icon} />
    </TouchableOpacity>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  button: {
    backgroundColor: themeStyle.SECONDARY_COLOR,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 26,
  },
});
