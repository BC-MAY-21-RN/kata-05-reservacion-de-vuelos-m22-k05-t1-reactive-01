import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';
import {styles} from './style';
import Header from '../../component/Header/Header';
import ButtonForm from '../../component/Button/ButtonForm';

const To = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} onPress={() => navigation.goBack()} />
      <FlightsCard iataCodeFrom="AAA" from="Argentina" />
      <Title title="Where will you be flying to?" />
      <TextInput
        style={styles.input}
        placeholder="Select location"
        placeholderTextColor="black"
      />
      <ButtonForm
        title="Next"
        onPress={() => navigation.navigate('SelectDate')}
      />
    </View>
  );
};

export default To;
