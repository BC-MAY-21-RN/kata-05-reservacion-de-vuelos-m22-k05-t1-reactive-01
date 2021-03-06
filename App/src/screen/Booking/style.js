import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    height: themeStyle.HEIGHT_SCREEN,
    marginHorizontal: 20,
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    color: 'black',
    fontSize: 15,
  },
  title: {
    marginTop: 30,
    color: 'black',
    fontSize: 35,
    fontWeight: themeStyle.FONT_WEIGHT_BLOD,
  },
  content: {
    height: 300,
  },
  boxStyles: {
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
  },
  dropdownStyles: {
    borderColor: 'transparent',
  },
  buttonContainer: {
    position: 'absolute',
    marginTop: themeStyle.HEIGHT_SCREEN / 1.3,
    width: '100%',
  },
});
