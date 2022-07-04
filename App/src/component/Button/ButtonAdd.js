import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconPlus from '../../assets/icon/add.svg';
import themeStyle from '../../styles/theme.style';
import React from 'react';

const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <IconPlus style={styles.icon} width={30} height={30} />
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
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 8,
  },
  icon: {
    marginLeft: 26,
  },
});
