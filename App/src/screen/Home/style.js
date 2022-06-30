import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';
export const styles = StyleSheet.create({
  container: {},
  button: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: themeStyle.WIDTH_SCREEN / 2.5,
    marginTop: themeStyle.HEIGHT_SCREEN / 1.3,
  },
});
