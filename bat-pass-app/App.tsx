import { View } from 'react-native';
import styles from './Styles'
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <View style={styles.AppContainer}>
      <Home />
    </View>
  );
}