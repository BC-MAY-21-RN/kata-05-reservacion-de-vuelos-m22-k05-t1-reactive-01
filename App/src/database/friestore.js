import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {clean_store} from '../store/Slice/FlightSlice/FlightSlice';
import {store} from '../store/store';
import {add_data} from '../store/Slice/FetchDataSlice/FetchDataSlice';
const db = firestore();
const current = auth().currentUser;

export const getData = async () => {
  try {
    const arrayFlights = [];
    const usersQuerySnapshot = await firestore()
      .collection('journey')
      .where('uid', '==', current.uid)
      .get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      arrayFlights.push({id: documentSnapshot.id, ...documentSnapshot.data()});
    });
    return arrayFlights;
  } catch (error) {
    const errorName = 'failure when trying to display flights';
  }
};

export const saveFlight = async (state, navigation) => {
  const {origin, destiny, date, passenger} = state;
  await db
    .collection('journey')
    .add({
      origin: origin,
      destiny: destiny,
      date: date,
      passenger: passenger,
      uid: current.uid,
    })
    .then(() => {
      navigation.navigate('Home');
      store.dispatch(clean_store());
    });
};
