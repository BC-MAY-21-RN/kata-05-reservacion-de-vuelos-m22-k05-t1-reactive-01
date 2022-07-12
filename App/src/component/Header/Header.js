import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Back from '../../assets/icon/back.svg';
import Logout from '../../assets/icon/logout.svg';
import {styles} from './style';
const Header = ({navigation, onPress, type}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {type === true ? (
          <Logout width={25} height={25} />
        ) : (
          <Back width={25} height={25} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;