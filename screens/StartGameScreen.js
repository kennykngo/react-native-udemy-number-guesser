import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game Screen</Text>
      {/* <View style={styles.inputContainer}> */}
      <Card style={styles.inputContainer}>
        <Text> Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;