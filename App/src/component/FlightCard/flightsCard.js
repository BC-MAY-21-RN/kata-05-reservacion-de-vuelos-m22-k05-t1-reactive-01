import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from '../../assets/icon/plane-solid.svg';
const flightsCard = ({date, iataCodeTo, iataCodeFrom, to, from, passagers}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.item}>
            <Text style={styles.otitle}>{iataCodeFrom}</Text>
            <Text>{from}</Text>
          </View>
          <View style={styles.icono}>
            <Icon width={30} height={30} color="#7B90FC" />
          </View>
          <View style={styles.item}>
            <Text style={styles.dtitle}>{iataCodeTo}</Text>
            <Text style={styles.toTex}>{to}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.ftext}>{date}</Text>
          <Text style={styles.ftext}>passengers {passagers}</Text>
        </View>
      </View>
    </View>
  );
};

export default flightsCard;
