import React, {useEffect} from 'react';
import {View} from 'react-native';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonForm from '../../component/Button/ButtonForm';
import {styles} from './style';

import Header from '../../component/Header/Header';
import store from '../../store/store';
import {clean_store} from '../../store/Slice/FlightSlice/FlightSlice';
import {useSelector} from 'react-redux';

import {saveFlight} from '../../database/friestore';

const Final = ({navigation}) => {
  const state = useSelector(state => state.flight);
  const {origin, destiny, date, passenger} = state;
  return (
    <View style={styles.container}>
      <Header
        type={false}
        navigation={navigation}
        onPress={() => navigation.goBack()}
      />
      <Title title="Your request was received." />
      <View style={styles.content}>
        <FlightsCard
          date={date}
          iataCodeFrom={destiny.iso_airport}
          to={destiny.country}
          from={origin.country}
          iataCodeTo={origin.iso_airport}
          passenger={'passenger: ' + passenger}
        />
        <View style={styles.buttonContainer}>
          <ButtonForm
            title="Finish"
            onPress={() => saveFlight(state, navigation)}
          />
        </View>
      </View>
    </View>
  );
};

export default Final;
/*

*/
