import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {clean_store} from '../store/Slice/FlightSlice/FlightSlice';
import {store} from '../store/store';
import {add_data} from '../store/Slice/FetchDataSlice/FetchDataSlice';
const db = firestore();
//const current = auth().currentUser;

export const getJourney = async () => {
  await db
    .collection('journey')
    .where('uid', '==', 'ptwCl9aXTPh2v7Yt3c0BMKh25kw1')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(element => {
        store.dispatch(add_data(element));
      });
    });
};
export const getData = async () => {
  const current = auth().currentUser;
  try {
    const arrayFlights = [];
    const usersQuerySnapshot = await firestore()
      .collection('journey')
      .where('uid', '==', current.uid)
      .get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      //  store.dispatch(
      //    add_data({id: documentSnapshot.id, ...documentSnapshot.data()}),
      //  );
      arrayFlights.push({id: documentSnapshot.id, ...documentSnapshot.data()});
    });
    return arrayFlights;
    //console.log(store.fetchedata);
  } catch (error) {
    const errorName = 'failure when trying to display flights';
    // console.log(`ERROR:${errorName}    DESCRIPTION:${error}`);
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
      uid: 'ptwCl9aXTPh2v7Yt3c0BMKh25kw1',
    })
    .then(() => {
      navigation.navigate('Home');
      store.dispatch(clean_store());
    });
};
/*
export const saveFlight = (state) => {
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
*/
