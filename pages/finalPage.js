import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Image from 'react-native-remote-svg';
import StyleSheet from 'react-native-media-query';

export const FinalPage = () => {
  return (
    <ImageBackground
      source={require('../src/assets/finalPage/FinalBackground.png')}
      style={{flex: 1, justifyContent: 'center'}}
      resizeMode="stretch">
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../src/assets/finalPage/Verify_Icon.svg')}
            style={styles.image}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Almost There</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            Please wait while we verify your identity
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const {styles} = StyleSheet.create({
  title: {
    color: '#3B52D9',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 25,
    },
  },
  titleContainer: {
    marginTop: 60,
    '@media (max-width: 370px)': {
      marginTop: 40,
    },
  },
  content: {
    color: '#3B52D9',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 16,
    },
  },
  contentContainer: {
    marginTop: 24,
    paddingHorizontal: 90,
    '@media (max-width: 370px)': {
      marginTop: 15,
    },
  },
  image: {
    width: 227,
    '@media (max-width: 370px)': {
      width: 200,
    },
  },
  imageContainer: {
    alignSelf: 'center',
    marginLeft: '13%',
    marginTop: 20,
    '@media (max-width: 370px)': {
      marginTop: 28,
    },
  },
});

