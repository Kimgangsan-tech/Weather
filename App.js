import * as Location from "expo-location";
import React,{Component} from "react";
import Loading from "./Loading";
import {Alert} from "react-native";
import axios from "axios";
import Weather from "./Weather";
const API_KEY = '51bbea6491d3ebc2cf7d4da5e51f91b3'

export default class App extends React.Component{
  state = {
    isLoading : true
  };
  
  getWeather = async(lat,lon) => {
    const {
      data:{
        main:{temp},
      weather}
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false, 
      condition: weather[0].main, 
      temp});
  }
  getLocation =async()=>{
    try{
      // throw Error();
      await Location.requestForegroundPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync(); //location 안에 coords를 한번에 찾는다?
      this.getWeather(latitude,longitude);
      this.setState({isLoading : false});
    }catch(error){
      Alert.alert("Can't find you");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition = {condition}/>;  
  }
}