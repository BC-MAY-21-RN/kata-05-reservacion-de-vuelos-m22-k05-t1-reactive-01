import auth from '@react-native-firebase/auth';
import {setName, setEmail, setPassword} from '../component/Redux/Actions';
import {Store} from '../component/Redux/Store';

export const signOut = ({navigation}) => {
  alert('Log Out', 'Are you sure you want to log out?', {
    textConfirm: 'Yes',
    textCancel: 'No',
    onConfirm: () => confirmClick(),
    onCancel: () => console.log('No pressed'),
  });

  const confirmClick = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('register');
        Store.dispatch(setName(''));
        Store.dispatch(setEmail(''));
        Store.dispatch(setPassword(''));
      })
      .catch(error => alert(error.message));
  };
};
