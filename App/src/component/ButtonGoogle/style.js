import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';

export const styleButton = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: themeStyle.SECONDARY_COLOR,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    color: themeStyle.BACKGROUND_COLOR_LIGHT,
    fontSize: themeStyle.FONT_SIZE_BUTTON,
    fontWeight: themeStyle.FONT_WEIGHT_BLOD,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});
