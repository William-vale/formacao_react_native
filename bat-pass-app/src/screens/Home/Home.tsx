import { Text, View } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import styles from "./Style";
//import styles from './Style';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatTextInput/>
      </View>


    </View>
  );
}
