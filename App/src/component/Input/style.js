import themeStyle from '../../styles/theme.style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: themeStyle.CONTAINER_WIDTH,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: themeStyle.FONT_SIZE_LARGE,
  },
  validationError: {
    fontSize: themeStyle.FONT_SIZE_LARGE,
    fontWeight: themeStyle.FONT_WEIGHT_LIGHT,
    color: '#f00',
    textAlignVertical: 'center',
    marginLeft: 5,
  },
  input: {
    width: '100%',
    borderColor: themeStyle.PRIMARY_COLOR,
    borderWidth: 1,
  },
});
