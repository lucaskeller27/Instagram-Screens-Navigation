import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const navigateToLogin = () => {
  navigation.navigate('InstagramLogin');
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.cog} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3524/3524538.png',}}/>
      </View>
      <View style={styles.containertwo}>
        <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',}}/>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonOne}>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.user} source={{ uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',}}/>
            <Text style={styles.text}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.user} source={{ uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',}}/>
            <Text style={styles.text}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.user} source={{ uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',}}/>
            <Text style={styles.text}>Usuário</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={styles.buttonFour}>
            <Text style={styles.textFour}>Entrar em outra conta</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.paragraphtwo}>
          Criar nova conta
        </Text>
        <View style={styles.logos}>
          <Image style={styles.meta} source={{ uri: 'https://companieslogo.com/img/orig/META_BIG.D-db66a9c7.png?t=1654568366',}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1C3140',
    padding: 8,
    paddingBottom: '30%',
  },
  containertwo: {
    alignItems: 'center',
  },
  header: {
    position: 'fixed', 
    top: '40px', 
    right: '20px', 
    display: 'flex'
  },
  image: {
    margin: 30,
    padding: 30,
  },
  user: {
    padding: 20,
    marginRight: 15,
  },
  cog: {
    height: 30,
    width: 30,
  },
  footer: {
    alignItems: 'center',
    position: 'fixed',
    bottom: 30,
    width: '100%',

  },
  paragraphtwo: {
    display: 'flex',
    fontSize: 11,
    color: '#FFFFFF',
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: '#344854',
    color: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0,
    borderColor: '#457500',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    alignItems: 'center',
  },
  textFour: {
    color: '#E8EAEB',
    fontSize: 13,
  },
  buttonFour: {
    padding: 15,
    margin: 5,
    marginTop: 10,
    backgroundColor: '#1C3140',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#A7B3BF',
    elevation: 0,
    alignItems: 'center',
  },
  logos: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  meta: {
    padding: 30,
    resizeMode: 'contain',
  },
});
