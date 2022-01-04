const { useState, useEffect } = require("react")
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"

export default function Detalhes({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.text0}>
                    <Text style={styles.texto1}>Brilho Car</Text>
                </View>
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
        fontSize: 30,
        marginRight: '50%',

    },
    agendamento:{
        padding: 10,
        flexDirection: 'column',
        marginLeft: 20
    },
    data1: {
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#cccccc',
        marginRight: 40,
    },
    hora1: {
        fontSize: 15,
        color: '#cccccc',
        alignItems: 'center',
        marginTop: 4,
        marginLeft: 10,

    },
    nomelava1: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#cccccc',
        marginVertical: 40,
    },
    c: {
        flexDirection: 'row',
        width:'90%',
    },
    image1: {
        height: 30,
        width: 30,
        margin: 45,
       marginLeft: 30
    },
})

