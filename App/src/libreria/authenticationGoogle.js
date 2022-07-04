import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
//const signIn = (firstname, suscribe, email, password, navigation)
export const signInGoogle = async navigation => {
  try {
    GoogleSignin.configure({
      webClientId:
        '1023121760646-4o0p6e0meeogfe9he5poq2llq4oo873e.apps.googleusercontent.com',
    });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const authAux = await auth().signInWithCredential(googleCredential);
    const userData = {
      email: authAux.additionalUserInfo.profile.email,
      fullName: authAux.additionalUserInfo.profile.given_name,
    };
    if (authAux.additionalUserInfo.isNewUser) {
      const current = auth().currentUser;
      addUserInfo(
        userData.fullName,
        true,
        userData.email,
        current.uid,
        navigation,
      );
    }
    return navigation.navigate('Home');
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('user cancelled the login flow: ' + error.code);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('operation (sign in) is in progress already: ' + error.code);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('play services not available or outdated: ' + error.code);
    } else {
      console.log(error);
    }
  }
};

export const addUserInfo = (firstname, suscribe, email, uid, navigation) => {
  firestore()
    .collection('Users')
    .add({
      firstname: firstname,
      suscribe: suscribe,
      email: email,
      uid: uid,
    })
    .then(() => {
      console.log('Usuario agregado! => Enviando  A Home');
      navigation.navigate('Home');
    })
    .catch(error => console.log(error));
};
