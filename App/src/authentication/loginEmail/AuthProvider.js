import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
      .then(() => navigation.navigate('SignIn'))
      .catch(error => {
        alert('Error');
      });
  }, 3000);
};
