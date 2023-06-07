import React from 'react';
import {ScrollView, Text, View, ImageBackground} from 'react-native';
import PrimaryButton from '../src/components/primaryButton';
import StyleSheet from 'react-native-media-query';

export const StartPage = () => {
  return (
    <ImageBackground
      source={require('../src/assets/secondPage/StartingBackground.png')}
      resizeMode="stretch"
      style={styles.homepage}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's Get Started</Text>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Step 1</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            Take a clear photo of the back of your identity card
          </Text>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Step 2</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            Take a clear photo of you face from all directions by following the
            instructions
          </Text>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Step 3</Text>
        </View>

        <View style={styles.contentContainer2}>
          <Text style={styles.content}>
            Wait for our AI engine to verify your identity
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton>Start Now</PrimaryButton>
      </View>
    </ImageBackground>
  );
};

const {styles} = StyleSheet.create({
  homepage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: '#3B52D9',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 28,
    },
  },
  titleContainer: {
    marginBottom: 50,
    '@media (max-width: 370px)': {
      marginBottom: 35,
    },
  },
  subTitle: {
    color: '#3B52D9',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 18,
    },
  },
  subTitleContainer: {
    marginBottom: 10,
  },
  content: {
    color: '#3B52D9',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 15,
    },
  },
  contentContainer: {
    marginBottom: 20,
    paddingHorizontal: 70,
  },
  contentContainer2: {
    marginBottom: 90,
    paddingHorizontal: 70,
    '@media (max-width: 370px)': {
      marginBottom: 60,

    },
  },
  buttonContainer: {
    marginBottom: 70,
    '@media (max-width: 370px)': {
      marginBottom: 50,
    },
  },
});
