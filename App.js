import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstOnBoarding from "./components/screens/onboarding/FirstOnboarding";
import SecondOnBoarding from "./components/screens/onboarding/SecondOnBoarding";
import ThirdOnBoarding from "./components/screens/onboarding/ThirdOnBoarding";

export default function App() {
  return (
    <View style={styles.container}>
      <ThirdOnBoarding/>
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
