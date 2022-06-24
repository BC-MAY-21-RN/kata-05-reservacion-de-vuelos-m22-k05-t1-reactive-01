import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from './style';
import {useRoute} from '@react-navigation/native';
const Home = () => {
  const route = useRoute();
  const {params} = route;
  return (
    <View style={styles.container}>
      <Text>Pagina home</Text>
      <Text>{params.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
