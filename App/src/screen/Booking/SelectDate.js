import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from '../../component/Title/Title';
import FlightsCard from '../../component/FlightCard/flightsCard';
import {styles} from './style';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {store} from '../../store/store';
import {add_date} from '../../store/Slice/FlightSlice/FlightSlice';
import DatePicker from 'react-native-modern-datepicker';
import {useSelector} from 'react-redux';
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
  const state = useSelector(state => state.flight);
  const {origin, destiny} = state;

  return (
    <View style={styles.container}>
      <Header
        type={false}
        navigation={navigation}
        onPress={() => navigation.goBack()}
      />
      <FlightsCard
        iataCodeFrom={destiny.iso_airport}
        to={destiny.country}
        from={origin.country}
        iataCodeTo={origin.iso_airport}
      />
      <Title title="Select date" />
      <View style={styles.content}>
        <DatePicker
          current={currentDate}
          minimumDate={currentDate}
          onSelectedChange={handleDate}
          mode="calendar"
          options={{backgroundColor: 'transparent'}}
          minuteInterval={30}
        />
      </View>
      <View>
        <ButtonForm
          title={'Next'}
          onPress={() => {
            store.dispatch(add_date(fecha)), navigation.navigate('Passenger');
          }}
        />
      </View>
    </View>
  );
};

export default SelectDate;
