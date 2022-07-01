import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const ButtonNext = ({status}) => {
  const value = 'gray';
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{status}</Text>
    </TouchableOpacity>
  );
};

export default ButtonNext;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: windowHeight / 1.2,
    backgroundColor: '#5C6EF8',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 19,
    bottom: 0.9,
    textAlign: 'center',
    height: 45,
    textAlignVertical: 'center',
    paddingHorizontal: windowWidth / 3,
  },
});
