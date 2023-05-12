// Spotify Login Screen

import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containertwo}>
        <Image style={styles.image} source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png',}}/>
      </View>
      <View style={styles.buttons}>
        <TextInput style={styles.input} placeholder="Email address or username"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
      </View>
      <Text style={styles.paragraphtwo}>
        or continue with
      </Text>
      <View style={styles.logos}>
        <Image style={styles.facebook} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',}}/>
        <Image style={styles.apple} source={{ uri: 'data:image/png;base64,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',}}/>
      </View>
      <Text style={styles.paragraphthree}>
        Forgot your password?
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
    margin: 30,
    resizeMode: 'contain',
  },
  paragraphtwo: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
  },
  paragraphthree: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    padding: 15,
    margin: 5,
    marginBottom: 10,
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gainsboro',
    textAlign: 'center',
  },
  button: {
    padding: 15,
    margin: 5,
    backgroundColor: '#1EB955',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#457500'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  logos: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  facebook: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignItems: 'center',
  },
  apple: {
    height: 30,
    width: 30,
    alignItems: 'center',
  },
});
