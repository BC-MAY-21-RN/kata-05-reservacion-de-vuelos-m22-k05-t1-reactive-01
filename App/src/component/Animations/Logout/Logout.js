import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';
import themeStyle from '../../../styles/theme.style';
import {logout} from '../../../authentication/loginEmail/AuthProvider';
const Logout = ({navigation}) => {
  Keyboard.dismiss();

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../../../assets/logout/logout.json')}
        autoPlay
        duration={1000}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'white',
    width: themeStyle.WIDTH_SCREEN,
    height: themeStyle.HEIGHT_SCREEN,
  },
});
