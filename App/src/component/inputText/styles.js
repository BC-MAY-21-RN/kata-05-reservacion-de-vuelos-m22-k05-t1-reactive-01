import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../styles/theme.style';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    height: 140,
    backgroundColor: '#f5fdff',
    borderRadius: 20.05,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#eae9f2',
    width: Dimensions.get('screen').width - 20,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 0.5,
    margin: 20,
  },
});

export default styles;
