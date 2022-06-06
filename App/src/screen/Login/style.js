import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: Dimensions.get('window').width,
    //backgroundColor: 'pink',
    //alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitle: {
    flex: 0.2,
    justifyContent: 'center',
    width: Dimensions.get('screen').width - 20,
    // backgroundColor: 'pink',
  },
  title: {
    color: theme.PRIMARY_COLOR,
    fontSize: 30,
    fontWeight: 'bold',
    //marginTop: 50,
    //marginBottom: 30,
    //backgroundColor: 'violet',
  },
  containerForm: {
    flex: 0.5,
    ///backgroundColor: 'red',
    //marginTop: 30,
  },
  containerInput: {
    width: Dimensions.get('screen').width - 20,
  },
  input: {
    width: '100%',
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
  },
  titleInput: {
    marginTop: 20,
    fontSize: 18,
  },
  containerButton: {
    flex: 0.4,
    //backgroundColor: 'yellow',
    width: Dimensions.get('screen').width - 20,
  },
  containerFooter: {
    flex: 0.1,
    flexDirection: 'row',
    //backgroundColor: '#42f56f',
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
});
