import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';


export const logIn = (email, password, navigation) => {
  setTimeout(() => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const currentUser = auth().currentUser;
        navigation.navigate('Home', currentUser._user);
      })
      .catch(error => {
        alert('Usuario y/o contraseña incorrectos');
      });
  }, 3000);
};

export const logout = navigation => {
  setTimeout(() => {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'))
      .catch(error => {
        Alert.alert('Error: ' + error.toString());
      });
  }, 3000);
};
