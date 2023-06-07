import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const SecondaryButton = props => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={() => alert(props.children)}
        android_ripple={{color: '#778899'}}>
        <Text style={styles.buttonText}>
          {props.children}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Inter-VariableFont_slnt,wght',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default SecondaryButton;