import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import ButtonForm from '../../component/Button/ButtonForm';
import ButtonGoogle from '../../component/ButtonGoogle/ButtonGoogle';
import Footer from '../../component/Footer/Footer';
import Input from '../../component/Input/Input';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {logIn} from '../../authentication/loginEmail/AuthProvider';
import Loader from '../../component/Animations/Loader/Loader';

const Login = ({navigation}) => {
  const [status, setStatus] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      logIn(formValue.email, formValue.password, navigation);
      setStatus(true);
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.containerInput}>
        <Input
          title="Email*"
          err={formik.errors.email}
          textContentType="emailAddress"
          keyboardType="email-address"
          value={formik.values.email}
          onChangeText={text => formik.setFieldValue('email', text)}
        />
        <Input
          title="Password*"
          err={formik.errors.password}
          textContentType="password"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={text => formik.setFieldValue('password', text)}
        />
      </View>
      <View style={styles.containerButton}>
        <ButtonForm title="Login" onPress={formik.handleSubmit} />
        <Text style={styles.textButtonGroup}> or </Text>
        <ButtonGoogle title="Login with Google" />
      </View>
      <Footer
        title="You need create account"
        redirect="Signup"
        navigation={navigation}
        route="SignIn"
      />
      {status === false ? false : <Loader />}
    </View>
  );
};
function initialValues() {
  return {
    email: '',
    password: '',
  };
}

function validationSchema() {
  return {
    email: Yup.string().email().required('Email error'),
    password: Yup.string().required('Incorrect password'),
  };
}

export default Login;
//
