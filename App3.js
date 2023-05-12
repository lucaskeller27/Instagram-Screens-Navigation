// Spotify Home Screen

import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containertwo}>
        <Image style={styles.image} source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png',}}/>
      </View>
      <Text style={styles.paragraph}>
        We play the music. You enjoy it. Deal?
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.buttonOneText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwo}>
          <Text style={styles.buttonTwoText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraphtwo}>
        By clicking on sign up, you agree to Spotify's Terms and Conditions of Use.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  containertwo: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    padding: 40,
    margin: 10,
    resizeMode: 'contain',
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphtwo: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 50,
  },
  buttons: {
    paddingTop: 30,
  },
  buttonOne: {
    padding: 15,
    margin: 5,
    backgroundColor: '#1EB955',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#457500'
  },
  buttonTwo: {
    padding: 15,
    margin: 5,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gainsboro',
  },
  buttonOneText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonTwoText: {
    color: 'black',
    textAlign: 'center',
  },
});
