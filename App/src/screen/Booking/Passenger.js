import {StyleSheet, Text, View, List} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import FlightsCard from '../../component/FlightCard/flightsCard';
import Title from '../../component/Title/Title';
import ButtonNext from '../../component/Booking/ButtonNext.js/ButtonNext';
import PassengerPicker from '../../component/Booking/Passenger/Passengers';
const Passenger = () => {
  //const [passengers, setPassengers] = useState(null);

  return (
    <View>
      <Title title="How many passengers?" />

      <FlightsCard
        date="20/10/2020"
        iataCodeFrom="AAA"
        to="Bogota"
        from="Argentina"
        iataCodeTo="ARG"
        titlePassagers="passagers"
        passagers="5"
      />
      <PassengerPicker />
      <ButtonNext status="next" />
    </View>
  );
};

export default Passenger;
