import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTitle: {
    justifyContent: 'center',
    width: themeStyle.CONTAINER_WIDTH,
    marginTop: 25,
    marginBottom: 25,
  },
  title: {
    color: themeStyle.PRIMARY_COLOR,
    fontSize: themeStyle.FONT_SIZE_HIGH,
  },
  containerButton: {
    width: themeStyle.CONTAINER_WIDTH,
  },
  textButtonGroup: {
    textAlignVertical: 'center',
    textAlign: 'center',
    margin: 5,
  },
});
