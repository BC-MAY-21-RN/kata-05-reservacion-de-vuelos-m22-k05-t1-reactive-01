import {Text, View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {useSelector} from 'react-redux';
import {store} from '../../store/store';
import {add_origin} from '../../store/Slice/FlightSlice/FlightSlice';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from './style';

const From = ({navigation}) => {
  const [selected, setSelected] = useState();
  //const state = useSelector(state => state.counter);
  console.log(selected);
  const data = [
    {key: '1', value: 'Jammu & Kashmir'},
    {key: '2', value: 'Gujrat'},
    {key: '3', value: 'Maharashtra'},
    {key: '4', value: 'Goa'},
  ];
  return (
    <View style={styles.contaienr}>
      <Header navigation={navigation} onPress={() => navigation.goBack()} />
      <Text style={styles.title}>"Where are you now?"</Text>
      <View style={styles.content}>
        <SelectList
          setSelected={setSelected}
          data={data}
          search={true}
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
