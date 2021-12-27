const { useState, useEffect } = require("react")
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"


export default function Pagina3({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
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
        width: '120%',
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
        alignItems: 'center',
    },
    c: {
        fontSize: 20,
        color:'#4A4A4A', 
        width: '111%', 
        height: '27%',
    },
    b: {
        width: '60%'
    }
})

