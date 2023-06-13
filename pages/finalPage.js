import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import StyleSheet from 'react-native-media-query';

export const FinalPage = () => {
  return (
    <ImageBackground
      source={require('../src/assets/finalPage/FinalBackground.png')}
      style={{flex: 1, justifyContent: 'center'}}
      resizeMode="stretch">
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../src/assets/finalPage/recruitment1.gif')}
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
    // marginTop: 60,
    marginTop: 40,
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
    width: '100%',
    height: '100%',
  },

  imageContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    height: 200,
    width: 200,
    // marginTop: 20,
    marginTop: 40,
    '@media (max-width: 370px)': {
      marginTop: 60,
      height: 160,
      width: 160,
    },
  },
});
