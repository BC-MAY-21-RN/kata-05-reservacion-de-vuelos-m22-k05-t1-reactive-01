import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const InputText = ({title}) => {
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

export default InputText;
