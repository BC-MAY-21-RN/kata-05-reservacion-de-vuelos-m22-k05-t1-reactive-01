import {View, ScrollView} from 'react-native';
import React from 'react';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonAdd from '../../component/Button/ButtonAdd';
import {styles} from './style';
const MyFlight = () => {
  return (
    <View>
      <ScrollView>
        <FlightsCard
          date="20/10/2020"
          iataCodeFrom="AAA"
          to="Bogota"
          from="Argentina"
          iataCodeTo="ARG"
          passagers="5"
        />
      </ScrollView>
      <View style={styles.button}>
        <ButtonAdd />
      </View>
    </View>
  );
};

export default MyFlight;
