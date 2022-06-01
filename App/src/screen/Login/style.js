import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fcfbde',
    alignContent: 'center',
    alignItems: 'center',
  },
  containerLogin: {
    backgroundColor: 'blue',
    marginTop: 200,
  },
  containerInput: {
    width: Dimensions.get('screen').width - 20,
    backgroundColor: 'red',
  },
  title: {
    color: theme.PRIMARY_COLOR,
    fontSize: 24,
  },
  input: {
    backgroundColor: '#eae9f2',
    width: '100%',
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 0.7,
  },
  container2: {
    width: Dimensions.get('screen').width - 40,
    height: 140,
    backgroundColor: '#f5fdff',
    borderRadius: 20.05,
    marginTop: 15,
  },
  containerButton: {},
});
