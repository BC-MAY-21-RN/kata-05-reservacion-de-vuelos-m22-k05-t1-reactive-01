import React from 'react';
import {View} from 'react-native';
import ButtonNext from '../../component/Booking/ButtonNext.js/ButtonNext';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';

const Final = () => {
  return (
    <View>
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
      <ButtonNext status="next" />
    </View>
  );
};

export default Final;
