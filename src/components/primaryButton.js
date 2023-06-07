import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = props => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={() => alert(props.children)}
        android_ripple={{color: '#778899'}}>
        <Text
          style={styles.buttonText}>
          {props.children}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#3B52D9',
    fontFamily: 'Inter-VariableFont_slnt,wght',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default PrimaryButton;
