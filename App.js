import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { HomePage } from './pages/homePage';
import { StartPage } from './pages/startPage';
import { FaceRecognitionPage } from './pages/faceRecognitionPage';
import { FinalPage } from './pages/finalPage';
import ImageCapture from './pages/imageCapture';
import ImageVerificationPage from './pages/imageVerificationPage';

const App = () => {
  return (
      <FinalPage/>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
