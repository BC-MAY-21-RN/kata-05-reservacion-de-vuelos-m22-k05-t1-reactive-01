import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Title from '../../component/Title/Title';
import ButtonNext from '../../component/Booking/ButtonNext.js/ButtonNext';
import FlightsCard from '../../component/FlightCard/flightsCard';

const To = () => {
  return (
    <View style={styles.container}>
      <FlightsCard iataCodeFrom="AAA" from="Argentina" />
      <Title title="Where will you be flying to?" />
      <TextInput
        style={styles.input}
        placeholder="Select location"
        placeholderTextColor="black"
        //onChangeText={value => {    setTextInputFrom(value);}}
      />
      <ButtonNext status="next" />
    </View>
  );
};

export default To;

const styles = StyleSheet.create({
  container: {},
  input: {},
});
