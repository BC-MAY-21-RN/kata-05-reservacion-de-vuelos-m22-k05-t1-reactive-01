import {StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import React, {useState} from 'react';
import FlightsCard from '../../component/FlightCard/flightsCard';
import {styles} from './style';
import Header from '../../component/Header/Header';
import ButtonForm from '../../component/Button/ButtonForm';
import SelectList from 'react-native-dropdown-select-list';
import {store} from '../../store/store';
import {add_destiny} from '../../store/Slice/FlightSlice/FlightSlice';
import DataJson from '../../database/data.json';

import useFrom from '../../Hook/useFrom';
import {useSelector} from 'react-redux';

const To = ({navigation}) => {
  const state = useSelector(state => state.flight);
  const {iso_airport, country} = state.origin;
  const {selected, setSelected, matchCountry} = useFrom();
  const to = matchCountry(selected);
  return (
    <View style={styles.container}>
      <Header
        type={false}
        navigation={navigation}
        onPress={() => navigation.goBack()}
      />
      <FlightsCard iataCodeFrom={iso_airport} from={country} />
      <Text style={styles.title}>"Where will you be flying to?"</Text>
      <View style={styles.content}>
        <SelectList
          setSelected={setSelected}
          data={DataJson}
          search={true}
          boxStyles={styles.boxStyles}
          dropdownStyles={styles.dropdownStyles}
        />
      </View>
      <View style={styles.buttonCon}>
        <ButtonForm
          title="Next"
          onPress={() => {
            store.dispatch(add_destiny(to)), navigation.navigate('SelectDate');
          }}
        />
      </View>
    </View>
  );
};

export default To;
