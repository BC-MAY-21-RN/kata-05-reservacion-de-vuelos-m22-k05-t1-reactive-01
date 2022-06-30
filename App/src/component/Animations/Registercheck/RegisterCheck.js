import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';
const RegisterCheck = () => {
  Keyboard.dismiss();
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../../../assets/success/success.json')}
        autoPlay
        speed={0.5}
      />
    </View>
  );
};

export default RegisterCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
