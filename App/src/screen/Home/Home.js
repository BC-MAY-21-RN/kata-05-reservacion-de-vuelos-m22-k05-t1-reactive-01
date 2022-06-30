import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonAdd from '../../component/Button/ButtonAdd';
import {styles} from './style.js';
const Home = () => {
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

export default Home;
