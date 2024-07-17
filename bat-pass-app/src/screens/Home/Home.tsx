import { Text, View } from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";
import styles from "./Style";
//import styles from './Style';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatButton/>
      </View>

    </View>
  );
}
