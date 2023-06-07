import React from 'react';
import {ScrollView, Text, View, ImageBackground} from 'react-native';
import StyleSheet from 'react-native-media-query';
import PrimaryButton from '../src/components/primaryButton';
import SecondaryButton from '../src/components/secondaryButton';
import Image from 'react-native-remote-svg';

export const HomePage = () => {
  return (
    <ImageBackground
      source={require('../src/assets/Homepage/HomePageBackground.png')}
      resizeMode="stretch"
      style={styles.homepage}>
      <View style={styles.content}>
        <Image
          source={require('../src/assets/Homepage/Wallet_Icon.svg')}
          style={styles.image}
        />
      </View>

      <View>
        <Text style={styles.titleText}>Welcome</Text>
      </View>
      <View
        style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>
          Would you like to use your existing wallet?
        </Text>
      </View>
      <View style={styles.button}>
        <View>
          <PrimaryButton> Yes </PrimaryButton>
        </View>
        <View>
          <SecondaryButton> No </SecondaryButton>
        </View>
      </View>
    </ImageBackground>
  );
};
// '@media (max-width: 768px) and (min-width: 480px)'
const {styles} = StyleSheet.create({
  homepage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    marginBottom: 50,
    '@media (max-width: 370px)': {
      marginBottom: 30,
    },
  },
  image: {
    height: 231,
    width: 245,
    '@media (max-width: 370px)': {
      height: 200,
      width: 200,
    },
  },
  button: {
    flexDirection: 'row',
    marginBottom: 70,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 24,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    color: '#ffffff',
    '@media (max-width: 370px)': {
      fontSize: 24,
      marginBottom: 15,
    },
  },
  subtitleText: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    color: '#ffffff',
    '@media (max-width: 370px)': {
      fontSize: 18,
    },
  },
  subtitleContainer: 
    {
      paddingHorizontal: 20,
      '@media (max-width: 370px)': {paddingHorizontal: 28},
    }
  
});
