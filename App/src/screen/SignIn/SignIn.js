import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ButtonForm from '../../component/Button/ButtonForm';
import ButtonGoogle from '../../component/ButtonGoogle/ButtonGoogle';
import Input from '../../component/Input/Input';
import Footer from '../../component/Footer/Footer';
import {styles} from './style';
import ChBox from '../../component/CheckBox/ChBox';

const SignIn = ({navigation}) => {
  const [state, setstate] = useState({
    firstName: '',
    email: '',
    password: '',
    privacyPolicy: false,
    subscribeUpdates: false,
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
        <Text style={styles.title}>Sing up</Text>
      </View>
      <View style={styles.containerInput}>
        <Input
          title="First Name"
          onChangeText={value => handleChangeText('First Name', value)}
          textContentType={'emailAddress'}
          keyboardType="email-address"
        />
        <Input
          title="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <Input
          title="Password"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={value => handleChangeText('password', value)}
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
        />
        <ChBox label="Subscribe for select product updates" />
      </View>
      <View style={styles.containerButton}>
        <ButtonForm title="Login" onPress={() => login()} />
        <Text style={styles.textButtonGroup}> or </Text>
        <ButtonGoogle title="Sign U with Google" />
      </View>
      <Footer
        title="Already have an account?"
        redirect="Login"
        navigation={navigation}
        route="Login"
      />
    </View>
  );
};

export default SignIn;
