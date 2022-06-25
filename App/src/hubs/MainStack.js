import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home/Home';
import Login from '../screen/Login/Login';
import SignIn from '../screen/SignIn/SignIn';
import MyFlight from '../screen/MyFlights/MyFlight';
export default function mainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyFlight"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MyFlight" component={MyFlight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
