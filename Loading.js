import React from "react";
import {StyleSheet,View,Text,StatusBar} from "react-native";

const loading = () => {
  return(
    <View style={{flex:1,justifyContent:"flex-end",alignItems:"center",paddingVertical:80,backgroundColor:"skyblue "}}>
      <StatusBar Barstyle="dark-content"/>
      <Text style={{fontSize:30,color:"red"}}>Getting The Fucking Weather!!!</Text>
    </View>
  );
}

export default loading;