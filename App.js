import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Matheus Paiva Bacalhau</Text>
      <StatusBar style="auto" />
      <Image source={logo} style={{width:305, height:159}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
