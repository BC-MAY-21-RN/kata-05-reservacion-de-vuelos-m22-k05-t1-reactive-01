import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import FlightsCard from '../../component/FlightCard/flightsCard';
import Title from '../../component/Title/Title';
import PassengerPicker from '../../component/Booking/Passenger/Passengers';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {useSelector} from 'react-redux';

const Passenger = ({navigation}) => {
  const state = useSelector(state => state.flight);
  const {origin, destiny, date} = state;
  return (
    <View style={styles.container}>
      <Header navigation={navigation} onPress={() => navigation.goBack()} />
      <FlightsCard
        date={date}
        iataCodeFrom={destiny.iso_airport}
        to={destiny.country}
        from={origin.country}
        iataCodeTo={origin.iso_airport}
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
