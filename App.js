import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function InstagramHome({ navigation }) {
  return (
    <View style={styles.containerIH}>
      <View style={styles.headerIH}>
          <TouchableOpacity>
            <Image style={styles.cogIH} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3524/3524538.png',}}/>
          </TouchableOpacity>
      </View>
      <View style={styles.containertwoIH}>
        <Image style={styles.imageIH} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',}}/>
      </View>
      <View style={styles.buttonsIH}>
        <View style={styles.buttonOneIH}>
          <TouchableOpacity style={styles.buttonIH}>
            <Image style={styles.userIH} source={{ uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',}}/>
            <Text style={styles.textIH}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIH}>
            <Image style={styles.userIH} source={{ uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',}}/>
            <Text style={styles.textIH}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIH}>
            <Image style={styles.userIH} source={{ uri: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',}}/>
            <Text style={styles.textIH}>Usuário</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={styles.buttonFourIH}  onPress={() => navigation.navigate('Instagram - Login')}>
            <Text style={styles.textFourIH}>Entrar em outra conta</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.footerIH}>
        <Text style={styles.paragraphtwoIH}>
          Criar nova conta
        </Text>
        <View style={styles.logosIH}>
          <Image style={styles.metaIH} source={{ uri: 'https://companieslogo.com/img/orig/META_BIG.D-db66a9c7.png?t=1654568366',}}/>
        </View>
      </View>
    </View>
  );
}

function InstagramLogin({ navigation }) {
  return (
    <View style={styles.containerIL}>
      <View style={styles.headerIL}>
          <TouchableOpacity  onPress={() => navigation.navigate('Instagram - Home')}>
            <Image style={styles.cogIL} source={{ uri: 'https://www.iconarchive.com/download/i95431/iconsmind/outline/Arrow-Back-3.ico',}}/>
          </TouchableOpacity>
      </View>
      <View style={styles.containertwoIL}>
        <Text style={styles.textPTBRIL}>Português (Brasil)</Text>
        <Image style={styles.imageIL} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',}}/>
      </View>
      <View style={styles.buttonsIL}>
          <TextInput
            style={styles.buttonIL}
            placeholder="Nome de usuário, email ou número de celular"/>
          <TextInput 
            style={styles.buttonIL}
            placeholder="Senha"/>
          <TouchableOpacity style={styles.buttonTwoIL}>
            <Text style={styles.textTwoIL}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.textForgotIL}>Esqueceu a senha?</Text>
      </View>
      <View style={styles.footerIL}>
          <TouchableOpacity style={styles.buttonSpotifyIL} onPress={() => navigation.navigate('Spotify - Home')}>
            <Text style={styles.textAltIL}>Entrar com Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAltIL}>
            <Text style={styles.textAltIL}>Criar nova conta</Text>
          </TouchableOpacity>
        <View style={styles.logosIL}>
          <Image style={styles.metaIL} source={{ uri: 'https://companieslogo.com/img/orig/META_BIG.D-db66a9c7.png?t=1654568366',}}/>
        </View>
      </View>
    </View>
  );
}

function SpotifyHome({ navigation }) {
  return (
    <View style={styles.containerSH}>
      <View style={styles.headerIL}>
          <TouchableOpacity  onPress={() => navigation.navigate('Instagram - Login')}>
            <Image style={styles.cogIL} source={{ uri: 'https://www.iconarchive.com/download/i95431/iconsmind/outline/Arrow-Back-3.ico',}}/>
          </TouchableOpacity>
      </View>
      <View style={styles.containertwoSH}>
        <Image style={styles.imageSH} source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png',}}/>
      </View>
      <Text style={styles.paragraphSH}>
        We play the music. You enjoy it. Deal?
      </Text>
      <View style={styles.buttonsSH}>
        <TouchableOpacity style={styles.buttonOneSH}>
          <Text style={styles.buttonOneTextSH}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwoSH}  onPress={() => navigation.navigate('Spotify - Login')}>
          <Text style={styles.buttonTwoTextSH}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraphtwoSH}>
        By clicking on sign up, you agree to Spotify's Terms and Conditions of Use.
      </Text>
    </View>
  );
}

function SpotifyLogin({ navigation }) {
  return (
    <View style={styles.containerSL}>
      <View style={styles.headerIL}>
          <TouchableOpacity  onPress={() => navigation.navigate('Instagram - Login')}>
            <Image style={styles.cogIL} source={{ uri: 'https://www.iconarchive.com/download/i95431/iconsmind/outline/Arrow-Back-3.ico',}}/>
          </TouchableOpacity>
      </View>
      <View style={styles.containertwoSL}>
        <Image style={styles.imageSL} source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png',}}/>
      </View>
      <View style={styles.buttonsSL}>
        <TextInput style={styles.inputSL} placeholder="Email address or username"></TextInput>
        <TextInput style={styles.inputSL} placeholder="Password"></TextInput>
          <TouchableOpacity style={styles.buttonSL}>
            <Text style={styles.buttonTextSL}>LOG IN</Text>
          </TouchableOpacity>
      </View>
      <Text style={styles.paragraphtwoSL}>
        or continue with
      </Text>
      <View style={styles.logosSL}>
        <Image style={styles.facebookSL} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',}}/>
        <Image style={styles.appleSL} source={{ uri: 'data:image/png;base64,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',}}/>
      </View>
      <Text style={styles.paragraphthreeSL}>
        Forgot your password?
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Instagram - Home" component={InstagramHome} />
      <Stack.Screen name="Instagram - Login" component={InstagramLogin} />
      <Stack.Screen name="Spotify - Home" component={SpotifyHome} />
      <Stack.Screen name="Spotify - Login" component={SpotifyLogin} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // InstagramHome
  containerIH: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1C3140',
    padding: 8,
    paddingBottom: '30%',
  },
  containertwoIH: {
    alignItems: 'center',
  },
  headerIH: {
    position: 'fixed', 
    top: '40px', 
    right: '20px', 
    display: 'flex'
  },
  imageIH: {
    margin: 30,
    padding: 30,
  },
  userIH: {
    padding: 20,
    marginRight: 15,
  },
  cogIH: {
    height: 30,
    width: 30,
  },
  footerIH: {
    alignItems: 'center',
    position: 'fixed',
    bottom: 30,
    width: '100%',

  },
  paragraphtwoIH: {
    display: 'flex',
    fontSize: 11,
    color: '#FFFFFF',
  },
  buttonIH: {
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
  textIH: {
    color: '#FFFFFF',
    alignItems: 'center',
  },
  textFourIH: {
    color: '#E8EAEB',
    fontSize: 13,
  },
  buttonFourIH: {
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
  logosIH: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  metaIH: {
    padding: 30,
    resizeMode: 'contain',
  },
  containerIL: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1C3140',
    padding: 8,
    paddingBottom: '15%',
  },
  containertwoIL: {
    alignItems: 'center',
  },
  headerIL: {
    position: 'fixed', 
    top: '40px', 
    left: '20px', 
    display: 'flex'
  },
  imageIL: {
    margin: 30,
    padding: 30,
  },
  cogIL: {
    height: 30,
    width: 30,
  },
  footerIL: {
    alignItems: 'center',
    position: 'fixed',
    bottom: 30,
    display: 'flex',
    width: '100%',

  },
  buttonIL: {
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
  buttonTwoIL: {
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
  textForgotIL: {
    fontSize: 13,
    paddingTop: 15,
    paddingBottom: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textTwoIL: {
    fontSize: 13,
    color: '#FFFFFF',
    alignItems: 'center',
  },
  textPTBRIL: {
    color: '#4E6270',
    alignItems: 'center',
    position: 'fixed',
    top: 80,
  },
  textAltIL: {
    color: '#E8EAEB',
    fontSize: 13,
  },
  buttonAltIL: {
    padding: 10,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#A7B3BF',
    width: "80%",
    display: "flex",
    alignItems: "center",
  },
  buttonSpotifyIL: {
    padding: 10,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#A7B3BF',
    width: "80%",
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  logosIL: {
    alignItems: 'center',
  },
  metaIL: {
    padding: 30,
    resizeMode: 'contain',
  },
  buttonsIL: {
    width: '100%',
    display: "flex",
    alignItems: "center",
  },
  containerSH: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  containertwoSH: {
    alignItems: 'center',
  },
  imageSH: {
    width: 200,
    padding: 40,
    margin: 10,
    resizeMode: 'contain',
  },
  paragraphSH: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphtwoSH: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 50,
  },
  buttonsSH: {
    paddingTop: 30,
  },
  buttonOneSH: {
    padding: 15,
    margin: 5,
    backgroundColor: '#1EB955',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#457500'
  },
  buttonTwoSH: {
    padding: 15,
    margin: 5,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gainsboro',
  },
  buttonOneTextSH: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonTwoTextSH: {
    color: 'black',
    textAlign: 'center',
  },
  containerSL: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  containertwoSL: {
    alignItems: 'center',
  },
  imageSL: {
    width: 200,
    padding: 40,
    margin: 30,
    resizeMode: 'contain',
  },
  paragraphtwoSL: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
  },
  paragraphthreeSL: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputSL: {
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
  buttonSL: {
    padding: 15,
    margin: 5,
    backgroundColor: '#1EB955',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#457500'
  },
  buttonTextSL: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  logosSL: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  facebookSL: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignItems: 'center',
  },
  appleSL: {
    height: 30,
    width: 30,
    alignItems: 'center',
  },
});

