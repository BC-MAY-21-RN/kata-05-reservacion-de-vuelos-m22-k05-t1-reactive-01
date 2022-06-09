import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const ChBox = ({
  label,
  terms,
  and,
  privacy,
  asterisk,
  disabled,
  onValueChange,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.labelSub}>{terms}</Text>
      <Text style={styles.label}>{and}</Text>
      <Text style={styles.labelSub}>{privacy}</Text>
      <Text style={styles.asterisk}>{asterisk}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {marginLeft: 3},
  labelSub: {marginLeft: 3, textDecorationLine: 'underline'},
  asterisk: {color: 'red'},
});
export default ChBox;
