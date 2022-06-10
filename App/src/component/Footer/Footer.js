import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {styles} from './style';
import React from 'react';

const Footer = ({title, redirect, navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Text style={styles.redirect}>{redirect}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
