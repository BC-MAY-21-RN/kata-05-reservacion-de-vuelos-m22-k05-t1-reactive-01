import {Text, View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {useSelector} from 'react-redux';
import {store} from '../../store/store';
import {
  add_origin,
  del_origin,
} from '../../store/Slice/FlightSlice/FlightSlice';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from './style';
import FlightsCard from '../../component/FlightCard/flightsCard';
const From = ({navigation}) => {
  const [selected, setSelected] = useState();
  const data = [
    {key: '1', value: 'Jammu & Kashmir'},
    {key: '2', value: 'Gujrat'},
    {key: '3', value: 'Maharashtra'},
    {key: '4', value: 'Goa'},
  ];
  return (
    <View style={styles.contaienr}>
      <Header
        navigation={navigation}
        onPress={() => store.dispatch(del_origin())}
      />
      <Text style={styles.title}>"Where are you now?"</Text>
      <View style={styles.content}>
        <SelectList
          search={true}
          setSelected={setSelected}
          data={data}
          boxStyles={styles.boxStyles}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonForm
          title="Next"
          onPress={() => {
            store.dispatch(add_origin(selected)), navigation.navigate('To');
          }}
        />
      </View>
    </View>
  );
};

export default From;
