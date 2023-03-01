import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import background from './assets/rectangle.svg';
import LoginForm from './forms';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

