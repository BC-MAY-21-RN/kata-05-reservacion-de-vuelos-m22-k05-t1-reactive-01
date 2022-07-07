import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import FlightsCard from '../../component/FlightCard/flightsCard';
import Title from '../../component/Title/Title';
import PassengerPicker from '../../component/Booking/Passenger/Passengers';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {store} from '../../store/store';
import {del_passenger} from '../../store/Slice/FlightSlice/FlightSlice';
const Passenger = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        onPress={(() => store.dispatch(del_passenger()), navigation.goBack())}
      />
      <FlightsCard
        date="20/10/2020"
        iso_destiny="AAA"
        destiny="Bogota"
        origin="Argentina"
        iso_origin="ARG"
        passagers="passenger 5"
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
