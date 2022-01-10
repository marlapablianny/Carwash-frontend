const { useState, useEffect } = require("react")
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton1 from "../components/Button1"
import { Calendar } from "../components/calendar"
import api from "../src/Services/Api"
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from "../components/Button"



export default function Atualizaragenda({navigation}) {
    const [lavajato, setLavajato] = useState({})
    const [sabado, setSabado] = useState('')
    const [segundaasexta, setSegundaasexta] = useState('')

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

    const Atualizaragendalavajato = async () => {
        const token = await AsyncStorage.getItem('access_token')
        const response = await api.patch('lavajatos', {
            segundaasexta: segundaasexta,
            sabado: sabado
        }, {headers: {'Authorization' : `Bearer ${token}`}}) 

    }



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
                        <Text style={styles.texto1}> {lavajato.nomedolavajato}</Text>
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
                <Text style={styles.texto3}>Agenda</Text>
            </View>
             <Text style={styles.fucionamento}>Horario de Fucionamento</Text>
             <View style={styles.textInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Segunda á Sexta"
                    autoCorrect={false}
                    value={segundaasexta}
                    onChangeText={segundaasexta => setSegundaasexta(segundaasexta)}>
                    </TextInput>

                    <TextInput
                    style={styles.input}
                    placeholder="Sabado"
                    autoCorrect={false}
                    value={sabado}
                    onChangeText={sabado  => setSabado(sabado)}>
                    </TextInput>
            </View>
            <View style={styles.b1}>
                <MyButton text="Atualizar Agenda"
                    onPress={Atualizaragendalavajato}/>
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
        padding: 7, 
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
        padding: 10,
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
        width: '90%'
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
        paddingTop: 10,
        alignItems: 'center'
    }, 
    texto3: {
        fontSize: 25,
        color: '#cccccc',
        fontWeight: 'bold',
        marginLeft: 30,
    },
    servico: {
        flexDirection: 'row',
        width:'80%', 
    },
    servico1: {
        fontSize: 20,
        marginVertical: 20,
        marginRight: 3,
        marginHorizontal: 10,
    },
    rodainicial: {
        flexDirection: 'row',
        backgroundColor: '#cccccc',
        marginStart: 70,
    },
    roda: {
        width: '90%',
        padding: 30,
       marginRight: 50,
    },
    image2: {
        height: 60,
        width: 60,
        margin: 23,
        marginLeft: 10,
    },
    texto4 :{
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 2,
        marginHorizontal: 50,
        marginVertical: 10,

    },
    fucionamento: {
        fontSize: 22,
        color: '#cccccc',
        fontWeight: 'bold',
        padding: 10,
    },
    b1: {
        padding: 15,
    },
   
})

