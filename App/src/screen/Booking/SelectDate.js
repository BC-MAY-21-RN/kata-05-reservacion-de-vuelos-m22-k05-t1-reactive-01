import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';
import {styles} from './style';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {store} from '../../store/store';
import {add_date, del_date} from '../../store/Slice/FlightSlice/FlightSlice';

const SelectDate = ({navigation}) => {
  const [disable, setDisable] = useState(false);
  const [fecha, setFecha] = useState();
  const [currentDate, setCurrent] = useState();
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    if (date <= 9) {
      setCurrent(year + '-' + month + '-' + '0' + date);
    }
    if (month <= 9) {
      setCurrent(year + '-' + '0' + month + '-' + date);
    } else {
      setCurrent(year + '-' + month + '-' + date);
    }
  }, []);
  const handleDate = date => {
    setFecha(date);
    setDisable(true);
  };
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        onPress={(() => store.dispatch(del_date()), navigation.goBack())}
      />
      <FlightsCard
        iso_destiny="AAA"
        iso_origin="ARG"
        destiny="Bogota"
        origin="Argentina"
      />
      <Title title="Select date" />
      <View style={styles.content}></View>
      <View>
        <ButtonForm
          title={'Next'}
          onPress={() => {
            store.dispatch(add_date('11/2/33')),
              navigation.navigate('Passenger');
          }}
        />
      </View>
    </View>
  );
};

export default SelectDate;
