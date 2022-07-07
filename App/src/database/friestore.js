import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {clean_store} from '../store/Slice/FlightSlice/FlightSlice';
import {store} from '../store/store';
import {add_data} from '../store/Slice/FetchDataSlice/FetchDataSlice';
export const getJourney = () => {
  const currentUser = auth().currentUser;
  firestore()
    .collection('journey')
    .where('uid', '==', currentUser.uid)
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(element => {
        store.dispatch(add_data(element));
      });
    });
};

export const saveFlight = state => {
  const currentUser = auth().currentUser;
  firestore()
    .collection('journey')
    .add({
      origin: state.flight.origin,
      destiny: state.flight.destiny,
      date: state.flight.date,
      passenger: state.flight.passenger,
      uid: currentUser.uid,
    })
    .then({clean_store});
};

export const save = state => {
  const currentUser = auth().currentUser;
  const {origin, destiny, date, passenger} = state;
  console.log(state);
  firestore()
    .collection('journey')
    .add({
      origin: state.flight.origin,
      destiny: state.flight.destiny,
      date: state.flight.date,
      passenger: state.flight.passenger,
      uid: currentUser.uid,
    })
    .then({clean_store});
};
