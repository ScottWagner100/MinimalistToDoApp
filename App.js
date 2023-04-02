import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from "./ContainerStyles/MainStyles";

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
}

