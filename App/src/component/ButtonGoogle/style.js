import {StyleSheet, Dimensions} from 'react-native';

export const styleButton = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#6471E5',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    textAlign: 'center',
  },
});
