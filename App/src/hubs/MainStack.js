import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home/Home';
import Login from '../screen/Login/Login';
import SignIn from '../screen/SignIn/SignIn';

import Final from '../screen/Booking/Final';
import From from '../screen/Booking/From';
import To from '../screen/Booking/To';
import SelectDate from '../screen/Booking/SelectDate';
import Passenger from '../screen/Booking/Passenger';
export default function mainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Passenger"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Passenger" component={Passenger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
