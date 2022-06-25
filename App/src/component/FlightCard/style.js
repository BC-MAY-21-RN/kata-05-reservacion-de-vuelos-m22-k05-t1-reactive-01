import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';
export const styles = StyleSheet.create({
  container: {marginHorizontal: 10},
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  item: {
    flexDirection: 'column',
    width: 100,
  },
  otitle: {
    fontWeight: themeStyle.FONT_WEIGHT_BLOD,
    fontSize: themeStyle.FONT_SIZE_HIGH,
    color: 'black',
  },
  dtitle: {
    fontWeight: themeStyle.FONT_WEIGHT_BLOD,
    fontSize: themeStyle.FONT_SIZE_HIGH,
    color: 'black',
    textAlign: 'right',
  },
  toTex: {
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
  },
  icono: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  ftext: {
    fontWeight: themeStyle.FONT_WEIGHT_BLOD,
    color: 'black',
    fontSize: themeStyle.FONT_SIZE_MEDIUM,
  },
});
