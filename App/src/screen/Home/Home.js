import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import FlightsCard from '../../component/FlightCard/flightsCard';
import ButtonAdd from '../../component/Button/ButtonAdd';
import {styles} from './style.js';
import useFligts from '../../Hook/useFligths';
import {logout} from '../../authentication/loginEmail/AuthProvider';
import Header from '../../component/Header/Header';

const Home = ({navigation}) => {
  const {fligths, getDataBd, isLoading, isSuccess} = useFligts();

  useEffect(() => {
    getDataBd();
  }, []);

  const {origin, destiny, date, passenger} = fligths;
  return (
    <>
      {!isLoading && isSuccess ? (
        <View>
          <View style={styles.container}>
            <Header
              type={true}
              onPress={() => {
                logout(navigation);
              }}
            />
            <FlatList
              data={fligths}
              keyExtractor={item => item.id}
              pagingEnabled={true}
              renderItem={({item, index}) => (
                <FlightsCard
                  date={item.date}
                  iataCodeFrom={item.origin.iso_airport}
                  to={item.destiny.country}
                  from={item.origin.country}
                  iataCodeTo={item.destiny.iso_airport}
                  passenger={'passenger: ' + item.passenger}
                />
              )}
            />
          </View>
          <View style={styles.button}>
            <ButtonAdd onPress={() => navigation.navigate('From')} />
          </View>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default Home;
