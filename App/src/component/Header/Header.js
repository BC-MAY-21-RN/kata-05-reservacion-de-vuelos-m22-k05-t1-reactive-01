import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Back from '../../assets/icon/back.svg';
import Logout from '../../assets/icon/logout.svg';

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

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 50,
  },
  button: {
    height: 40,
    width: 40,
  },
});
