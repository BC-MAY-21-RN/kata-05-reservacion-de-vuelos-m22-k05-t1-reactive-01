import {StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import React, {useState} from 'react';
import FlightsCard from '../../component/FlightCard/flightsCard';
import {styles} from './style';
import Header from '../../component/Header/Header';
import ButtonForm from '../../component/Button/ButtonForm';
import SelectList from 'react-native-dropdown-select-list';
import {store} from '../../store/store';
import {
  add_destiny,
  del_destiny,
} from '../../store/Slice/FlightSlice/FlightSlice';

const To = ({navigation}) => {
  const [selected, setSelected] = useState();

  const data = [
    {key: '1', value: 'Jammu & Kashmir'},
    {key: '2', value: 'Gujrat'},
    {key: '3', value: 'Maharashtra'},
    {key: '4', value: 'Goa'},
  ];
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        onPress={(() => )}
      />
      <FlightsCard iso_origin="AAA" origin="Argentina" />
      <Text style={styles.title}>"Where will you be flying to?"</Text>
      <View style={styles.content}>
        <SelectList
          setSelected={setSelected}
          data={data}
          search={true}
          boxStyles={styles.boxStyles}
        />
      </View>
      <View style={styles.buttonCon}>
        <ButtonForm
          title="Next"
          onPress={() => {
            store.dispatch(add_destiny(selected)),
              navigation.navigate('SelectDate');
          }}
        />
      </View>
    </View>
  );
};

export default To;
