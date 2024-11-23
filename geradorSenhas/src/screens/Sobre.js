
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre Nós</Text>
            <Text style={styles.text}>
                Somos a PiciSenhas, uma empresa que quer te ensinar a cuidar de suas senhas de maneira segura. 
                A segurança das suas senhas é fundamental para proteger suas informações pessoais.
                Uma senha forte deve conter letras maiúsculas, minúsculas, números e caracteres especiais.
                Nunca compartilhe suas senhas e use senhas diferentes para contas diferentes.
            </Text>
            <Text style={styles.text}>
                Armazenar suas senhas em um gerenciador de senhas pode ajudar a mantê-las seguras e acessíveis.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
    },
});

export default Sobre;