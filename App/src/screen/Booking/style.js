import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: themeStyle.WIDTH_SCREEN - 20,
    marginTop: themeStyle.HEIGHT_SCREEN * 0.01,
    backgroundColor: 'red',
  },
  input: {
    marginTop: themeStyle.HEIGHT_SCREEN / 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 15,
  },
});
