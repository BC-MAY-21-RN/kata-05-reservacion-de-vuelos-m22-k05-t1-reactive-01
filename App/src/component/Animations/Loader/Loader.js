import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';
const Loader = () => {
  Keyboard.dismiss();
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../../../assets/loader/loading-plane.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'white',
  },
});
