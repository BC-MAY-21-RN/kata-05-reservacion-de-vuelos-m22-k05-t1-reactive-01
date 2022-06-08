import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
const Input = ({
  title,
  placeholder,
  onChangeText,
  secureTextEntry,
  textContentType,
  keyboardType,
  multiLine,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        keyboardType={keyboardType}
        multiline={multiLine}
      />
    </View>
  );
};

export default Input;
