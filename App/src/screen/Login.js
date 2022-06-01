import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../styles/theme.style';

import InputText from '../component/inputText/InputText';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View>
        <InputText title="User Name" style={styles.input} />
      </View>
      <View>
        <InputText title="Password" style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_HIGH,
  },
  input: {
    borderColor: 'black',
    width: '80%',
  },
});

export default Login;
