import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    container: {marginTop: themeStyle.FONT_SIZE_HIGH * 0.01},
    title: {marginTop: 60, color: 'black', fontSize: 35, fontWeight: '900'},
  },
});
