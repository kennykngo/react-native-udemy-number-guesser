import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/colors';

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  // only version 21+ cna use the ripple effect
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 20,
  },
});

export default MainButton;
