import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [isTitle, setIsTitle] = useState(false);
  const handlePress = () => {
    setIsTitle(!isTitle);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text>Testing App V1</Text>
      <Text>Hello</Text>
      <Button title="Press Me" onPress={handlePress}></Button>
      <Text style={{ color: "red" }}>{isTitle && "Pressed!"}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 30,
  },
});
