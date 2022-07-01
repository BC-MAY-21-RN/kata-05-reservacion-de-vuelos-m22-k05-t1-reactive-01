import {Text, View, TextInput} from 'react-native';
import React from 'react';
import ButtonNext from '../../component/Booking/ButtonNext.js/ButtonNext';
import Title from '../../component/Title/Title';
import {styles} from './style';
const From = () => {
  return (
    <View style={styles.container}>
      <Title title="Where are you now?" />
      <TextInput
        style={styles.input}
        placeholder="Select location"
        placeholderTextColor="black"
        //onChangeText={value => setTextInputFrom(value)}
      />
      <ButtonNext status="next" />
    </View>
  );
};

export default From;
