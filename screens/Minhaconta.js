const { useState, useEffect } = require("react")
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"
import api from "../src/Services/Api"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Minhaconta({navigation}) {
    const [usuario, setUsuario] = useState({})

    const pegarUsuarioLogado = async () => {
        const token = await AsyncStorage.getItem('access_token')
        return await api.get('profile', {headers: {'Authorization' : `Bearer ${token}`}})
    }

    useEffect(() => {
        pegarUsuarioLogado().then(({ data }) => {
            setUsuario({ ...data })
        })
    }, [])

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
            <Image style={styles.image}
                source={require('../assets/user.png')}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.texto2}></Text>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/mini.png')}/>
                <Text style={styles.servico1}>{ usuario.nome }</Text>
            </View>
            <Image style={styles.image2} source={require('../assets/linha.png')}/>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/bio.png')}/>
                <Text style={styles.servico1}>Bio</Text>
            </View>
            <Image style={styles.image2} source={require('../assets/linha.png')}/>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/instagram.png')}/>
                <Text style={styles.servico1}>{usuario.insta}</Text>
            </View>
            <Image style={styles.image2} source={require('../assets/linha.png')}/>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/email.png')}/>
                <Text style={styles.servico1}>{usuario.email}</Text>
            </View>
            <Image style={styles.image2} source={require('../assets/linha.png')}/>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/endereco.png')}/>
                <Text style={styles.servico1}>{usuario.endereco}</Text>
            </View>
            <Image style={styles.image2} source={require('../assets/linha.png')}/>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/telefone.png')}/>
                <Text style={styles.servico1}>{usuario.telefone}</Text>
            </View>
            <Image style={styles.image2} source={require('../assets/linha.png')}/>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    servico: {
        flexDirection: 'row',
        width:'80%',
    },
    servico1: {
        fontSize: 20,
        marginVertical: 3,
        marginRight: 5,
        marginHorizontal: 7,
        color: '#cccccc'
    },
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
    texto1: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    texto2: {
        fontSize: 15,
        textAlign: 'center',
        color: '#4A4A4A',
        justifyContent: 'center',
    },
    b: {
        width: '60%'
    },
    text:{
        width:'90%',
        textAlign: 'center',
        padding: 25,
    }, 
    text0:{
        width: '60%',
        padding: 15,
    },
    tab:{
        backgroundColor: '#cccccc'
    },
    TextInput:{
        width: '80%'
    },
    image: {
        height: 150,
        width: 150,
        margin: 25,
    },
    image1: {
        height: 16,
        width: 16,
        margin: 10,
       marginLeft: 2
    },
    image2: {
        height: 2,
        width: '80%',
        margin: 2,
    },
})

