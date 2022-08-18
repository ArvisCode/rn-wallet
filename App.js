import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainSmile}>🦆</Text>
      <Text style={styles.mainText}></Text>
      <Text style={styles.mainText}>Сезон охоти відкритий!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 60,
  },
  mainSmile: {
    fontSize: 200,
  },
});
