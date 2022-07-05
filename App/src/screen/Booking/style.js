import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    height: themeStyle.HEIGHT_SCREEN,
    marginHorizontal: 20,
    flexWrap: 'nowrap',
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
    backgroundColor: 'blue',
  },
  boxStyles: {
    borderRadius: 0,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
