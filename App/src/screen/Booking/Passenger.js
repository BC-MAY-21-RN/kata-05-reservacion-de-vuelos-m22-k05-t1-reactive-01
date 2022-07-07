import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import FlightsCard from '../../component/FlightCard/flightsCard';
import Title from '../../component/Title/Title';
import PassengerPicker from '../../component/Booking/Passenger/Passengers';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';

const Passenger = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      <Title title="How many passengers?" />
      <View style={styles.content}>
        <PassengerPicker />
      </View>

      <ButtonForm
        title="Next"
        onPress={() => {
          navigation.navigate('Final');
        }}
      />
    </View>
  );
};

export default Passenger;
