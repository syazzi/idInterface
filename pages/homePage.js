import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import StyleSheet from 'react-native-media-query';
import PrimaryButton from '../src/components/primaryButton';
import SecondaryButton from '../src/components/secondaryButton';

export const HomePage = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 500, // Adjust the duration of each bounce
        useNativeDriver: true,
      }),Animated.timing(bounceAnim, {
        toValue: 0.5,
        duration: 500, // Adjust the duration of each bounce
        useNativeDriver: true,
      }),Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 500, // Adjust the duration of each bounce
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0.8,
        duration: 500, // Adjust the duration of each bounce
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 500, // Adjust the duration of each bounce
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ImageBackground
      source={require('../src/assets/Homepage/HomePageBackground.png')}
      resizeMode="stretch"
      style={styles.homepage}>
      <View style={styles.content}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: bounceAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 50], // Adjust the output range to control the bounce intensity
                }),
              },
            ],
          }}>
        
            <Image source={require('../src/assets/Homepage/wallet2.png')}
            style={styles.image}/>
          </Animated.View>
      </View>

      <View>
        <Text style={styles.titleText}>Welcome</Text>
      </View>
      <View style={styles.subtitleContainer}>
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
    paddingLeft:10,
    marginBottom: 70,
    '@media (max-width: 370px)': {
      marginBottom: 50,
    },
  },
  image: {
    height: 245,
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
  subtitleContainer: {
    paddingHorizontal: 20,
    '@media (max-width: 370px)': {paddingHorizontal: 28},
  },
});
