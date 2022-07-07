import React from 'react';
import {View} from 'react-native';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {styles} from './style';
import store from '../../store/store';
import {clean_store} from '../../store/Slice/FlightSlice/FlightSlice';
import {useSelector} from 'react-redux';

const Final = ({navigation}) => {
  const state = useSelector(state => state.flight);
  console.log(state);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} onPress={() => navigation.goBack()} />
      <Title title="Your request was received." />
      <View style={styles.content}>
        <FlightsCard
          date="20/10/2020"
          iataCodeFrom="AAA"
          to="Bogota"
          from="Argentina"
          iataCodeTo="ARG"
          titlePassagers="passagers"
          passagers="5"
        />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonForm
          title="Finish"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Final;
