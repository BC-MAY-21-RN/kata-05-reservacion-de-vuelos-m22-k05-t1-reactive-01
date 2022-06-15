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
    marginTop: 20,
    marginBottom: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  containerCheckBox: {
    width: themeStyle.CONTAINER_WIDTH,
  },
  inputError: {
    textAlign: 'left',
    color: '#f00',
  },
});
