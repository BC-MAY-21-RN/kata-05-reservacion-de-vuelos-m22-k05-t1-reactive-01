import themeStyle from '../../styles/theme.style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: themeStyle.FONT_SIZE_LARGE,
    marginTop: 20,
  },
  input: {
    width: '100%',
    borderColor: themeStyle.PRIMARY_COLOR,
    borderWidth: 1,
  },
  container: {
    width: themeStyle.CONTAINER_WIDTH,
  },
});
