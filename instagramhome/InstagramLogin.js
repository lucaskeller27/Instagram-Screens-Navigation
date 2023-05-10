import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function InstagramLogin() {
  return (
    <View style={styles.container}>
    <div style={{position: 'fixed', top: '40px', left: '20px', display: 'flex'}}>
  <i className="fas fa-search" style={{marginRight: '10px'}}> <img style={styles.cog} src='https://www.iconarchive.com/download/i95431/iconsmind/outline/Arrow-Back-3.ico'/></i>
    </div>
      <View style={styles.containertwo}>
        <Text style={styles.textPTBR}>Português (Brasil)</Text>
        <img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></img>
      </View>
      <View style={styles.buttons}>
          <TextInput 
            style={styles.button}
            placeholder="Nome de usuário, email ou número de celular"/>
          <TextInput 
            style={styles.button}
            placeholder="Senha"/>
          <TouchableOpacity style={styles.buttonTwo}>
            <Text style={styles.textTwo}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.textForgot}>Esqueceu a senha?</Text>
      </View>
      <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonAlt}>
            <Text style={styles.textAlt}>Criar nova conta</Text>
          </TouchableOpacity>
        <View style={styles.logos}>
          <img style={styles.meta} src="https://companieslogo.com/img/orig/META_BIG.D-db66a9c7.png?t=1654568366"/>
        </View>
      </View>
    </View>
  );
}

export default function InstagramLoginScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InstagramLogin" component={InstagramLogin} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1C3140',
    padding: 8,
    paddingBottom: '15%',
  },
  containertwo: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    padding: 40,
  },
  cog: {
    height: 30,
    width: 30,
  },
  footer: {
    alignItems: 'center',
    position: 'fixed',
    bottom: 30,
    display: 'flex',
    width: '100%',

  },
  button: {
    padding: 20,
    margin: 5,
    backgroundColor: '#344854',
    color: '#89959E',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#63788A',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
    width: "90%",
  },
  buttonTwo: {
    padding: 17,
    margin: 5,
    backgroundColor: '#0064E0',
    color: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
  },
  textForgot: {
    fontSize: 13,
    paddingTop: 15,
    paddingBottom: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textTwo: {
    fontSize: 13,
    color: '#FFFFFF',
    alignItems: 'center',
  },
  textPTBR: {
    color: '#4E6270',
    alignItems: 'center',
    position: 'fixed',
    top: 80,
  },
  textAlt: {
    color: '#E8EAEB',
    fontSize: 13,
  },
  buttonAlt: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#A7B3BF',
    width: "80%",
    display: "flex",
    alignItems: "center",
    
  },
  logos: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  meta: {
    // height: 30,
    width: '20%',
  },
  buttons: {
    width: '100%',
    display: "flex",
    alignItems: "center",
  }
});
