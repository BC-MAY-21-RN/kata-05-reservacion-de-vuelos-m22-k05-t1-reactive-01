import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import ButtonForm from '../../component/Button/ButtonForm';
import ButtonGoogle from '../../component/ButtonGoogle/ButtonGoogle';
import Footer from '../../component/Footer/Footer';
import Input from '../../component/Input/Input';

const Login = ({navigation}) => {
  const [state, setstate] = useState({
    email: '',
    password: '',
  });
  const handleChangeText = (name, value) => {
    setstate({...state, [name]: value});
  };
  const login = () => {
    console.log(state);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.containerInput}>
        <Input
          title="Email"
          onChangeText={value => handleChangeText('email', value)}
          textContentType={'emailAddress'}
          keyboardType="email-address"
        />
        <Input
          title="Password"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={value => handleChangeText('password', value)}
        />
      </View>
      <View style={styles.containerButton}>
        <ButtonForm title="Login" onPress={() => login()} />
        <Text style={styles.textButtonGroup}> or </Text>
        <ButtonGoogle title="Login with Google" />
      </View>
      <Footer
        title="You need create account"
        redirect="Signup"
        navigation={navigation}
        route="SignIn"
      />
    </View>
  );
};

export default Login;
