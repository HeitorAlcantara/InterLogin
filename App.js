import React from "react";
import { Image, View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";

const Inter = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <View style={styles.imageInterrogation}>
        <Image
          source={require('./assets/interrogacao.png')}
          style={{ width: 23, height: 23, marginRight: '6%', marginTop: '3%' }}
        />
      </View>

      <View style={styles.imageLogo}>
        <Image
          source={require('./assets/Logo-banco-inter.svg.png')}
          style={{ width: '100%', height: 35, resizeMode: 'center' }}
        />
      </View>

      <View style={styles.mainContent}>
        <View style={styles.contentInformation}>
          <Image
            source={require('./assets/HA.jpeg')}
            style={{width: 48, height: 50, alignItems: 'flex-start', marginLeft:'5%', marginTop: '3%', resizeMode: 'cover'}}
          />
          <Text style={{fontSize: 10,alignSelf: 'center', position:'absolute', marginTop: '5%',  paddingRight: '25%', color: '#555'}}>
            Heitor Alcantara 
          </Text>
          <Text style={{fontSize: 16,alignSelf: 'center', position:'absolute', marginTop: '8%',  paddingRight: '25%', color: '#555', fontWeight:'bold'}}>
            ***4567-8
          </Text>
          <Text style={{fontSize: 14,alignSelf: 'center', position:'absolute', marginTop: '5%',  paddingLeft: '80%', color: '#F25C05',fontWeight:'bold'}}>
            Trocar
          </Text>
        </View>

        <Text style={{ alignSelf: 'flex-start', marginStart: '3%', marginBottom: '2%', color: '#a1a1a1', fontSize: 15, fontWeight:'bold' }}>
          Senha
        </Text>
        <TextInput
          style={styles.passwordInput}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Esqueci minha senha
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={{color: '#F25C05', fontWeight: 'bold', marginLeft: '12%'}}>
           iSafe
        </Text>

        <Text style={{color: '#F25C05', fontWeight: 'bold', marginRight: '12%'}}>
          Trocar ou abrir conta
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageInterrogation: {
    flex: 0.05,
    alignItems: 'flex-end',
  },
  imageLogo: {
    flex: 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '6%',
  },
  contentInformation: {
    flex: 0.15,
    justifyContent: 'space-between',
    width: '94%',
    marginBottom: '5%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#e1e1e1'
  },
  passwordInput: {
    backgroundColor: '#f1f1f1',
    fontWeight: 'bold',
    padding: 12,
    borderRadius: 7,
    width: '94%',
    marginBottom: '10%',
  },
  button: {
    backgroundColor: '#F27405',
    padding: 10,
    borderRadius: 8,
    width: '94%',
    marginBottom: '10%',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: "center"
  },
  text: {
    color: '#F25C05',
    fontWeight: 'bold'
  },
  footer: {
    flex: 0.05,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})


export default Inter;
