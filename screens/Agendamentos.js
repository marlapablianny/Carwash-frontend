const { useState, useEffect } = require("react")
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"

export default function Agendamentos({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
              <View style={styles.text0}>
                <Text style={styles.texto1}> Meus Agendamentos</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.texto2}> Data</Text>
            </View>
            <View style={styles.TextInput}>
                <TextInput
                style={styles.input}
                placeholder="00/00/0000"
                autoCorrect={false}
                onChangeText={() => {}}>
                </TextInput>
            </View>
            <View style={styles.user}>
                <Text style={styles.nome}>Juliana</Text>
            </View>
            <View style={styles.agendamento}>
                <Text style={styles.data1}>27/01</Text>
                <Text style={styles.hora1}>09:00</Text>
            </View>
            <View style={styles.nomelava}>
                <Text style={styles.nomelava1}>Brilho Car</Text>
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
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    texto2: {
        fontSize: 18,
        textAlign: 'center',
        color: '#cccccc',
        justifyContent: 'center',
    },
    b: {
        width: '60%'
    },
    text:{
        width:'90%',
        textAlign: 'center',
        padding: 25,
        marginRight: '70%',
        color: '#ccc',   
    }, 
    text0:{
        width: '60%',
        padding: 10,
        color: '#ccc',
    },
    tab:{
        backgroundColor: '#cccccc'
    },
    TextInput:{
        width: '80%'
    },
    user: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: '50%',

    },
    agendamento:{
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    data1: {
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#cccccc',
        marginRight: '40%',
    },
    hora1: {
        fontSize: 15,
        color: '#cccccc',
        alignItems: 'center'
    },
    nomelava1: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#cccccc',
        marginLeft: '50%', 
        flexDirection: 'column'
    }
})

