import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import LanternaBlack from './assets/lanterna-black.png';
import LanternaGreen from './assets/lanterna-green.png';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleSymbol() {
    setIsActive((oldValue:boolean) => {
      return !oldValue;
    });
    console.log(isActive);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={isActive ? LanternaBlack : LanternaGreen}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
