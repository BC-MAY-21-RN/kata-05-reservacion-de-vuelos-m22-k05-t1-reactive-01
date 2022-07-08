import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonAdd from '../../component/Button/ButtonAdd';
import {styles} from './style.js';
import useFligts from '../../Hook/useFligths';
import {logout} from '../../authentication/loginEmail/AuthProvider';
import Header from '../../component/Header/Header';

const Home = ({navigation}) => {
  const {fligths} = useFligts();

  const {origin, destiny, date, passenger} = fligths;
  return (
    <View style={styles.container}>
      <Header type={true} />
      <FlatList
        data={fligths}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        renderItem={({item, index}) => (
          <FlightsCard
            date={item.date}
            iataCodeFrom={item.destiny.iso_airport}
            to={item.destiny.country}
            from={item.origin.country}
            iataCodeTo={item.origin.iso_airport}
            titlePassagers="passagers"
            passagers={item.passenger}
          />
        )}
      />

      <View style={styles.button}>
        <ButtonAdd onPress={() => navigation.navigate('From')} />
      </View>
    </View>
  );
};

export default Home;

/*
<FlightsCard
          date="20/10/2020"
          iataCodeFrom="AAA"
          to="Bogota"
          from="Argentina"
          iataCodeTo="ARG"
          titlePassagers="passagers"
          passagers="5"
        /> */
