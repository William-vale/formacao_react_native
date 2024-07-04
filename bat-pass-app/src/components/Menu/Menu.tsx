import { View, Text } from 'react-native';
import styles from './MenuStyles';

export function Menu() {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.menuTexto}>Ola Mundo</Text>
    </View>
  );
}