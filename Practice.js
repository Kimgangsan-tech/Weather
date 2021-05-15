import React, {component} from "react";
import {View, Text} from "react-native";

class Cat extends Component { 
  render(){
    return (
      <Text>Hello cat</Text>
    );
  }
}

export default function Practice(){
  return Cat;
}