import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonAdd from '../../component/Button/buttonAdd';
const MyFlight = () => {
  return (
    <View>
      <FlatList />
      <View style={styles.button}>
        <ButtonAdd />
      </View>
    </View>
  );
};

export default MyFlight;
