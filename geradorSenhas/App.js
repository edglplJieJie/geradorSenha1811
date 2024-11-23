import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

// *** NOVO: Importações para Navegação ***
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// *** Fim das Novas Importações para Navegação ***

import Sobre from './src/screens/Sobre';
import SavedPasswords from './src/screens/SavedPasswords'; 
import { ModalPassword } from './src/components/modal';

 
let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const  [senhaGerada, setSenhaGerada] = useState("");
  const  [modalVisible, setModalVisible] = useState(false);
  const  [savedPasswords, setSavedPasswords] = useState([]);

 
 
  function gerarSenha() {
    let senha = "";
 
    for (let i = 0, n = charset.length; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n))
    }
    setSenhaGerada(senha)
    setModalVisible(true)
 
  }

  function salvarSenha() {
    setSavedPasswords(prevPasswords => {
    const updatedPasswords = [...prevPasswords, senhaGerada];
    setModalVisible(false); 
    navigation.navigate('SavedPasswords', {savedPasswords: updatedPasswords});
    return updatedPasswords; 
    });
}
 
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/img/picisenhaslogo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>PiciSenhas</Text>
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
                <Text style={styles.textButton}>Sobre Nós</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SavedPasswords', { savedPasswords })}>
                <Text style={styles.textButton}>Ver Senhas Salvas</Text> 
            </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword senha={senhaGerada} fecharModal={() => setModalVisible(false)} salvarSenha={salvarSenha}/>
      </Modal>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SavedPasswords" component={SavedPasswords}/>
        <Stack.Screen name="Sobre" component={Sobre}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
 
  },
  button: {
    backgroundColor: "#D98292",
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  textButton: {
    color: "#191726",
    fontWeight: "bold",
    fontSize: 18,
 
  },
  genText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  }
});
 