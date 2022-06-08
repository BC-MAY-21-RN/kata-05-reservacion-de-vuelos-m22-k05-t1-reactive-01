import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const ChBox = ({label, terms, and, privacy, disabled, onValueChange}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.label}>{terms}</Text>
      <Text style={styles.label}>{and}</Text>
      <Text style={styles.label}>{privacy}</Text>
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
});
export default ChBox;
/**
 *     <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
 */
