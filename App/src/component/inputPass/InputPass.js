import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const InputPass = ({title}) => {
  return (
    <View>
      <Text> {title}</Text>
      <TextInput
        style={styles.input}
        placeholder=" placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputPass;
