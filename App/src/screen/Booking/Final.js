import React from 'react';
import {View} from 'react-native';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {styles} from './style';

const Final = ({navigation}) => {
  return (
    <View style={styles.container}>7
      <Header navigation={navigation} onPress={() => navigation.goBack()} />
      <FlightsCard
        date="20/10/2020"
        iataCodeFrom="AAA"
        to="Bogota"
        from="Argentina"
        iataCodeTo="ARG"
        titlePassagers="passagers"
        passagers="5"
      />
      <Title title="Your request was received." />
      <ButtonForm title="Finish" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Final;
