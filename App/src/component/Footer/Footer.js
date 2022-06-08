import {Text, View, Linking} from 'react-native';
import {styles} from './style';
import React from 'react';

const Footer = ({title, redirect,navigation,route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.redirect} onPress={()=>navigation.navigate(rout)}> {redirect}</Text>
    </View>
  );
};

export default Footer;
