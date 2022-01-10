const { useState, useEffect } = require("react")
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"
import MyButton1 from "../components/Button1"
import api from "../src/Services/Api"
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Meulavajato({navigation}) {
    const [lavajato, setLavajato] = useState({})

    const pegarLavajato = async () => {
        const token = await AsyncStorage.getItem('access_token')
        const { data } = await api.get('profile', {headers: {'Authorization' : `Bearer ${token}`}})
        return data.lavajato
    }

    useEffect(() => {
        pegarLavajato().then((data) => {
            setLavajato({ ...data })
        })
    }, [])


    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.rodainicial}>
                <Image style={styles.image2}
                    source={require('../assets/car.png')}/>
                <View style={styles.roda}>
                    <Text style={styles.texto4}>Car Wash</Text>
                </View>
            </View>   
            <View style={styles.profile}>
                <Image style={styles.image}
                    source={require('../assets/user.png')}/>
                    <View style={styles.text0}>
                        <Text style={styles.texto1}>{lavajato.nomedolavajato}</Text>
                        <Text style={styles.texto2}>Seu Lava-jato</Text>
                    </View>
            </View>
            <View style={styles.b}>
                <MyButton1 text="Atualização da agenda"
                    onPress={() => {
                        navigation.navigate("Atualizaragenda")
                    }}/>
                     <MyButton1 text="Agendamentos"
                    onPress={() => {
                        navigation.navigate("AgendamentosLava")
                    }}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.texto3}>Serviços</Text>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/circulo.png')}/>
                <Text style={styles.servico1}> Enceramento profissional</Text>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/circulo.png')}/>
                <Text style={styles.servico1}> Polimento de faróis</Text>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/circulo.png')}/>
                <Text style={styles.servico1}> Cristalização de vidros</Text>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/circulo.png')}/>
                <Text style={styles.servico1}> Limpeza técnica de motor</Text>
            </View> 
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/circulo.png')}/>
                <Text style={styles.servico1}> Higienização de ar-condicionado</Text>
            </View> 
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/circulo.png')}/>
                <Text style={styles.servico1}> Higienização interna</Text>
            </View> 
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/circulo.png')}/>
                <Text style={styles.servico1}> Limpeza e hidratação de couro</Text>
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
    texto1: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 25,
        textAlign: 'center',
        color: '#cccccc',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    b: {
        width: '93%',
        flexDirection: 'row',
        padding: 10
    },
    text:{
        width:'90%',
        padding: 10,
        marginRight: 40,
    }, 
    text0:{
        width: '60%',
        padding: 9,
        marginRight: 30,
        marginVertical: 17
    },
    tab:{
        backgroundColor: '#cccccc'
    },
    TextInput:{
        width: '80%'
    },
    image: {
        height: 110,
        width: 110,
        margin: 15,
        marginLeft: 2,
    }, 
    profile: {
        flexDirection: 'row',
        width: '80%',
        padding: 10,
        alignItems: 'center'
    }, 
    texto3: {
        fontSize: 25,
        color: '#cccccc',
        fontWeight: 'bold',
        marginLeft: 30,
    },
    image1: {
        height: 16,
        width: 16,
        margin: 10,
       marginLeft: 2
    },
    servico: {
        flexDirection: 'row',
        width:'80%',
    },
    servico1: {
        fontSize: 20,
        marginVertical: 3,
        marginRight: 5,
        marginHorizontal: 7,
    },
    rodainicial: {
        flexDirection: 'row',
        marginTop: 20,
        width: '90%'

    },
    roda: {
        width: '90%',
        padding: 41,
        marginRight: 40,
    },
    image2: {
        height: 70,
        width: 70,
        margin: 25,
       marginLeft: 10,
    },
    texto4 :{
        fontSize: 27,
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 2,
        marginHorizontal: 50,
        marginVertical: 10,

    }
   
})

