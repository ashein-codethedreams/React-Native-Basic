import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [isTitle, setIsTitle] = useState(false);
  const handlePress = () => {
    setIsTitle(!isTitle);
  };
  return (
    <View style={styles.container}>
      <Text>Testing App V1</Text>
      <Text>Hello</Text>
      <Button title="Press Me" onPress={() => handlePress()}></Button>
      <Text>{isTitle && "Pressed"}</Text>
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
});
