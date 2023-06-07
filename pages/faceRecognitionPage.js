import React from 'react';
import {ScrollView, Text, View, ImageBackground} from 'react-native';
import StyleSheet from 'react-native-media-query';

export const FaceRecognitionPage = () => {
  return (
    <ImageBackground
      source={require('../src/assets/faceRecognitionPage/FaceRecognitionPageBackground.png')}
      resizeMode="stretch"
      style={styles.homepage}>
      <View>
        <View style={styles.scanContainer}></View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Facial Scan</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.content}>Face the camera</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const {styles} = StyleSheet.create({
  homepage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 26,
    },
  },
  titleContainer:{
    marginTop: 70,
    '@media (max-width: 370px)': {
      marginTop: 50,

    },
  },
  content: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 15,
    },
  },
  contentContainer: {
    marginTop: 24,
    '@media (max-width: 370px)': {
      marginTop: 20,

    },
  },
  scanContainer: {
    height: 260,
    width: 260,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ffffff',
    borderWidth: 10,
    borderRadius: 260 / 2,
    '@media (max-width: 370px)': {
      height: 240,
      width: 240,
      borderRadius: 240 / 2,
      marginBottom: 20
    },
  },
});
