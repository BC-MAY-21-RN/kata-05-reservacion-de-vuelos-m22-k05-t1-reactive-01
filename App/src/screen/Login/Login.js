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
import ButtonGoogle from '../../component/ButtonGoogle/ButtonGoogle';
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Email</Text>
          <TextInput
            style={styles.input}
            // placeholder=" Email"
            ///secureTextEntry={true}
          />
          <Text style={styles.titleInput}>Password</Text>
          <TextInput
            style={styles.input}
            // placeholder=" Email"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity>
          <ButtonForm title="Login" />
        </TouchableOpacity>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: 15,
            margin: 5,
          }}>
          or
        </Text>
        <TouchableOpacity>
          <ButtonGoogle title="Login with Google" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerFooter}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 15,
            color: 'grey',
          }}>
          You need to create an account?
        </Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 15,
            marginLeft: 4,
            color: '#6471E5',
          }}>
          SignUp
        </Text>
      </View>
    </View>
  );
};

export default Login;

/*
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
          <ButtonForm title="Login" />
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity>
          <ButtonGoogle title="enviar" />
        </TouchableOpacity>
      </View>
*/
