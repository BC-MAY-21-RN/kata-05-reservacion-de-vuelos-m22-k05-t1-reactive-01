import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styleButton} from './style';

const ButtonForm = props => {
  return (
    <View style={styleButton.container}>
      <TouchableOpacity>
        <Text style={styleButton.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonForm;
