import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '329362882571-7v0t0s6uk3po1hil7mof8aq29oo2pbtk.apps.googleusercontent.com',
});

export const signInWithGoogleAsync = async () => {
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_sign_in = auth().signInWithCredential(googleCredential);

  user_sign_in
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });
};
