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
    <div style={{position: 'fixed', top: '40px', right: '15px', display: 'flex'}}>
  <i className="fas fa-search" style={{marginRight: '10px'}}> <img style={styles.cog} src="https://cdn-icons-png.flaticon.com/512/3524/3524538.png"/></i>
    </div>
      <View style={styles.containertwo}>
        <img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></img>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonOne}>
          <TouchableOpacity style={styles.button}>
            <img style={styles.user} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"/>
            <Text style={styles.text}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <img style={styles.user} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"/>
            <Text style={styles.text}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <img style={styles.user} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"/>
            <Text style={styles.text}>Usuário</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={styles.buttonFour} onPress={navigateToLogin}>
            <Text style={styles.textFour}>Entrar em outra conta</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.paragraphtwo}>
          Criar nova conta
        </Text>
        <View style={styles.logos}>
          <img style={styles.meta} src="https://companieslogo.com/img/orig/META_BIG.D-db66a9c7.png?t=1654568366"/>
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
  image: {
    width: 50,
    padding: 40,
  },
  user: {
    width: 40,
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
    margin: 24,
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
    paddingBottom: 30,
  },
  meta: {
    // height: 30,
    width: 60,
    paddingRight: 10,
    alignItems: 'center',
  },
});
