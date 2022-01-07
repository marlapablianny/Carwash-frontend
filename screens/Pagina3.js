const { useState, useEffect } = require("react")
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import { Calendar } from '../components/calendar';
import { Alert } from 'react-native';
import api from "../src/Services/Api"

export default function Pagina3({navigation}) {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [agendadeatendimento, setAgendadeAtendimento] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function CreateLava() {
        const token = await AsyncStorage.getItem('access_token')
        console.log(token);
        const response =  await api.post('lavajatos', {
            nomedolavajato: nome,
            telefone: telefone,
            endereco: endereco,
            cidade: cidade,
            data: data,
            hora: hora,
            agendadeatendimento: agendadeatendimento
        }, {headers: {'Authorization' : `Bearer ${token}`}
        });
        Alert.alert('Lava-Jato Cadastrado')
        navigation.navigate('Home')
    }
    return(
        <KeyboardAvoidingView style={styles.container}>
              <View style={styles.imade1}>
                <Image style={styles.image}
                source={require('../assets/home.png')}/>
            </View>
            <View style={styles.cadastro}>
                <Text style={styles.c}> Cadastre seu Lava-jato</Text>
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
                placeholder="Cidade"
                autoCorrect={false}
                value={cidade}
                onChangeText={cidade => setCidade(cidade)}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Agendadeatendimento"
                autoCorrect={false}
                value={agendadeatendimento}
                onChangeText={agendadeatendimento  => setAgendadeAtendimento(agendadeatendimento)}>
                </TextInput>
            </View>
            <View>
                <Calendar></Calendar>
            </View>
            <View style={styles.b}>
                <MyButton text="Cadastrar"
                    onPress={CreateLava}/>
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
        fontSize: 22,
        color:'#4A4A4A',
    },
    b: {
        width: '60%'
    }, 
    cadastro:{
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
        alignItems: 'center',
    },
    image1:{
        marginTop: 0,
    }
})

