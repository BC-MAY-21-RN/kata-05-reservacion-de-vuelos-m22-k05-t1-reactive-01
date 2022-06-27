import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const AuthSignUp = (name, suscribe, email, password, navigation) => {
  setTimeout(() => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const current = auth().currentUser;
        firestore()
          .collection('users')
          .add({
            name: name,
            suscribe: suscribe,
            email: email,
            uid: current.uid,
            password: password,
          })
          .then(() => {
            navigation.navigate('Login');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  }, 2000);
};
