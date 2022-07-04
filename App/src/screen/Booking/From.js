import {Text, View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ButtonForm from '../../component/Button/ButtonForm';
import Header from '../../component/Header/Header';
import {useSelector} from 'react-redux';
import {store} from '../../store/store';
import {add_origin} from '../../store/Slice/OriginSlice/OriginSlice';
const From = ({navigation}) => {
  const state = useSelector(state => state.origin);
  return (
    <View style={styles.contaienr}>
      <Header navigation={navigation} onPress={() => navigation.goBack()} />
      <Text>"Where are you now?"</Text>
      <TextInput placeholder="Select location" placeholderTextColor="black" />
      <ButtonForm title="Next" onPress={() => navigation.navigate('To')} />
    </View>
  );
};

export default From;

const styles = StyleSheet.create({
  contaienr: {justifyContent: 'space-between'},
});
