import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ButtonForm = props => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 50,
    backgroundColor: 'blue',
  },
});

export default ButtonForm;
