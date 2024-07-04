import { View } from 'react-native';
import styles from './Styles'
import Home from './src/screens/Home/Home';
import { Menu } from './src/components/Menu/Menu';

export default function App() {
  return (
    <View style={styles.AppContainer}>
      <Home />
      {/* <Menu /> */}
    </View>
  );
}