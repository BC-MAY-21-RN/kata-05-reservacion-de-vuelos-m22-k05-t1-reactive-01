import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import theme from './style';
import {styles} from './style';
import ButtonForm from '../../component/Button/ButtonForm';
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.containerInput}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder=" Email"
            ///secureTextEntry={true}
          />
        </View>
        <View style={styles.containerInput}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            placeholder=" Email"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <ButtonForm title="asdasdasd" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
