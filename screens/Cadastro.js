const { useState, useEffect } = require("react")
import React from "react"
import { Alert } from "react-native"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import api from "../src/Services/Api"


export default function Cadastro({navigation}) {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function CreateUser() {
        const response =  await api.post('/users', {
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            email: email,
            password: password,
        });
        Alert.alert('Usuário Cadastrado')
        navigation.navigate('Pagina1')
    }


    return(
        <KeyboardAvoidingView style={styles.container}>
              <View>
                <Image style={styles.image}
                source={require('../assets/home.png')}/>
            </View>
            <View style={styles.cadastro}>
                <Text style={styles.c}> Cadastre-se</Text>
            </View>
            <View style={styles.textInput}>
                <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCorrect={false}
                value={nome}
                onChangeText={nome => setNome(nome)}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Telefone"
                autoCorrect={false}
                value={telefone}
                onChangeText={telefone => setTelefone(telefone)}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Endereço"
                autoCorrect={false}
                value={endereco}
                onChangeText={endereco => setEndereco(endereco)}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                value={email}
                onChangeText={email => setEmail(email)}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                value={password}
                onChangeText={password => setPassword(password)}>
                </TextInput>
            </View>
            <View style={styles.textofinal}>
                <TouchableOpacity style={styles.text}>
                    <Text>Ao criar sua conta você concorda com nossos termo de serviços e politicas de privacidade</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.b}>
                <MyButton text="Cadastrar"
                    onPress={CreateUser}/>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginBottom: 20,
        color: '#ccc',
        fontSize: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#cccccc",
        padding: 8,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
    },
    textInput:{
        width: '80%',
    },
    c: {
        fontSize: 25,
        color:'#4A4A4A',
    },
    b: {
        width: '60%'
    }, 
    cadastro:{
        marginRight: '45%',
        padding: 15
    },
    textofinal:{
        width: '80%',
        padding: 10
    },
    image: {
        height: 57,
        width: 280,
        margin: 50,
        marginTop: 10,
        alignItems: 'center',

    },
})

