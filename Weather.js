import React from "react";
import {StyleSheet,View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze : {
    iconName : "weather-fog"
  },
  Clear : {
    iconName : "weather-sunny"
  },
  Thunderstorm:{
    iconName : "thumb-down"
  },
  Drizzle:{
    iconName : "weather-rainy"`
  },
  Rain:{
    iconName : "weather-lightning-rainy"
  },
  Snow:{
    iconName : "snowman"
  },
  Atmosphere:{
    iconName : "water",
    gradient : ["red","red"]
  },
  Clouds:{
    iconName : "cloud"
  }};
export default function Weather({temp,condition}) { 
  return (
    <LinearGradient
      colors={[weatherOptions["Rain"].gradient]} style={styles.container}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
      <MaterialCommunityIcons name={weatherOptions["Rain"].iconName} size={100} color="white" />
      <Text style={styles.temp}>{Math.round(temp)}도</Text>
      </View>
      <View style={styles.halfContainter}>
      </View>
    </LinearGradient> 
);
}

Weather.propTypes ={
  temp : PropTypes.number.isRequired,
  condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze"]).isRequired
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  halfContainter:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  temp : {
    fontSize : 42,
    color:"orange" 
  }
}) 