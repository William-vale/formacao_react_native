import React from "react";
import { Image, Text } from "react-native";
import { styles } from "./BatLogoStyles";

export function BatLogo() {
  return (
    <>
      <Text style={styles.Title}>BAT PASS GENERATOR</Text>
      <Image
        style={styles.LogoSize}
        source={require("./../../../assets/batman-logo.png")}
      />
    </>
  );
}
