import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const getJourney = () => {
  const currentUser = auth().currentUser;
  firestore()
    .collection('journey')
    // Filter results
    .where(currentUser.uid === 'uid')
    .get()
    .then(querySnapshot => {
      /* ... */
    });
};
