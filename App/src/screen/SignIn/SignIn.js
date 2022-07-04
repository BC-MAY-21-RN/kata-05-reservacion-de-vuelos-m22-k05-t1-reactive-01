import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ButtonForm from '../../component/Button/ButtonForm';
import ButtonGoogle from '../../component/ButtonGoogle/ButtonGoogle';
import Input from '../../component/Input/Input';
import Footer from '../../component/Footer/Footer';
import {styles} from './style';
import ChBox from '../../component/CheckBox/ChBox';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {AuthSignUp} from '../../authentication/registerEmail/register';
import RegisterCheck from '../../component/Animations/Registercheck/RegisterCheck';
import {signInWithGoogleAsync} from '../../authentication/signInGoogle/SignInGoogle';
const SignIn = ({navigation}) => {
  const [status, setStatus] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      AuthSignUp(
        formValue.firstName,
        true,
        formValue.email,
        formValue.password,
        navigation,
      );
      setStatus(true);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Sing up</Text>
      </View>
      <View style={styles.containerInput}>
        <Input
          title="First Name"
          err={formik.errors.firstName}
          textContentType={'emailAddress'}
          keyboardType="email-address"
          value={formik.values.firstName}
          onChangeText={text => formik.setFieldValue('firstName', text)}
        />
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
      <View>
        <Text>
          Use 8 or more character whit a mix of letter,numbers, and symbols.
        </Text>
      </View>
      <View style={styles.containerCheckBox}>
        <ChBox
          label="I agree to the"
          terms="Terms"
          and="and"
          privacy="Privacy Policy"
          asterisk="*"
        />
        <ChBox label="Subscribe for select product updates" />
      </View>
      <View style={styles.containerButton}>
        <ButtonForm title="Sing Up" onPress={formik.handleSubmit} />
        <Text style={styles.textButtonGroup}> or </Text>
        <ButtonGoogle
          title="Sign Up with Google"
          onPress={() => signInWithGoogleAsync(navigation)}
        />
      </View>
      <Footer
        title="Already have an account?"
        redirect="Login"
        navigation={navigation}
        route="Login"
      />
      {status === false ? false : <RegisterCheck />}
    </View>
  );
};

function initialValues() {
  return {
    firstName: '',
    email: '',
    password: '',
  };
}

function validationSchema() {
  return {
    firstName: Yup.string().required('The user is oblitoried'),
    email: Yup.string().email().required('Email in use.Use a diferent email'),
    password: Yup.string().required('Incorrect password'),
  };
}
export default SignIn;
