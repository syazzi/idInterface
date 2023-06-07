import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import StyleSheet from 'react-native-media-query';
import PrimaryButton from '../src/components/primaryButton';
import SecondaryButton from '../src/components/secondaryButton';

const ImageVerificationPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Would you like to proceed with this image?
        </Text>
      </View>
      <View style={styles.butonContainer}>
        <View>
            <PrimaryButton>Yes</PrimaryButton>
        </View>
        <View>
            <SecondaryButton>No</SecondaryButton>
        </View>
      </View>
    </View>
  );
};

const {styles} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-VariableFont_slnt,wght',
    '@media (max-width: 370px)': {
      fontSize: 15,
    },
  },
  textContainer: {
    marginHorizontal: 77,
    marginBottom: 60,
    '@media (max-width: 370px)': {
      marginBottom: 40,
    },
  },
  butonContainer: {
    flexDirection: 'row',
    marginBottom: 70,
  }
});

export default ImageVerificationPage;
