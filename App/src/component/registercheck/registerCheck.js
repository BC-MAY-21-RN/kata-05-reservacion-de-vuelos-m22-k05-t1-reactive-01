
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';
const registerCheck = () => {
  Keyboard.dismiss();
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../../assets/11061-kick-ass.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default registerCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

