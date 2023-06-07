import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import StyleSheet from 'react-native-media-query';

const ImageCapture = () => {
  return (
    <View style={styles.container}>
      <Svg height="30%" width="90%" style={styles.box}>
        <Rect
          x="5%"
          y="4%"
          width="94%"
          height="95%"
          rx="18" // Border radius
          fill="rgba(0, 0, 0, 0)" // Fill color with opacity
          strokeWidth="5" // Border width
          stroke="white" // Border color
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Position the back of your identification card within the box and tap
          below
        </Text>
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
  box: {
    marginBottom: 79,
    '@media (max-width: 370px)': {
      marginBottom: 55,

    },
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
    marginBottom: 162,
    '@media (max-width: 370px)': {
      marginBottom: 142,
    },
  },
});

export default ImageCapture;
