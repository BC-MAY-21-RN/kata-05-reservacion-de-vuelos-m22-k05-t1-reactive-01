import firestore from '@react-native-firebase/firestore';
import {Store} from '../component/Redux/Store';
import {
  setOrigin,
  setDate,
  setDestiny,
  setPassenger,
} from '../component/Redux/Actions';

export function uploadData() {
  try {
    firestore().collection('Flies').add({
      origin: Store.getState().userReducer.origin,
      destiny: Store.getState().userReducer.destiny,
      date: Store.getState().userReducer.date,
      passengers: Store.getState().userReducer.passengers,
    });
  } catch (e) {
    console.log(e);
  } finally {
    Store.dispatch(setOrigin(''));
    Store.dispatch(setDestiny(''));
    Store.dispatch(setDate(''));
    Store.dispatch(setPassenger(''));
  }
}
