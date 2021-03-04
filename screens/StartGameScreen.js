import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = (props) => {
  const [enteredValue, setEnterValue] = useState('');
  const numberInputHandler = (inputText) => {
    // replace any value that's NOT 0-9 with an empty string
    setEnterValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text> Select a Number</Text>
        <Input
          style={styles.input}
          autoCapitalize='none'
          blurOnSubmit
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' onPress={() => {}} color={Colors.primary} />
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
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
