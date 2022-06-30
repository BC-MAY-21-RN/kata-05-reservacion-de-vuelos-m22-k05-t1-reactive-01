import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {To, From, SelectDate, Passenger, Final} from '../screen/index';
import Home from '../screen/Home/Home';
import Flights from '../screen/Home/Flights';
import Login from '../screen/Login/Login';
import SignIn from '../screen/SignIn/SignIn';

export default function mainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="From" component={From} />
        <Stack.Screen name="Flights" component={Flights} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
