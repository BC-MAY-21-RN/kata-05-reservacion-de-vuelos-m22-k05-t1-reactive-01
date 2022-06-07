import {Text, View, Linking} from 'react-native';
import {styles} from './style';
import React from 'react';

const Footer = ({title, redirect}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.redirect}>{redirect}</Text>
    </View>
  );
};

export default Footer;
