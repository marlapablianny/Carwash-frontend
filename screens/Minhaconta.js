const { useState, useEffect } = require("react")
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"

export default function Minhaconta({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
            <Image style={styles.image}
                source={require('../assets/user.png')}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.texto2}></Text>
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
})

