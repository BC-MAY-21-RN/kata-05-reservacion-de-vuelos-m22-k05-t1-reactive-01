import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonNext from '../../component/Booking/ButtonNext.js/ButtonNext';
//import DatePicker from 'react-native-modern-datepicker';
const SelectDate = () => {
  //const minDate = new Date(); // Today
  //const [selectedDate, setSelectedDate] = useState('');
  return (
    <View>
      <FlightsCard
        iataCodeFrom="AAA"
        to="Bogota"
        from="Argentina"
        iataCodeTo="ARG"
      />
      <Title title="Select date" />

      <ButtonNext status="next" />
    </View>
  );
};

export default SelectDate;

const styles = StyleSheet.create({});
