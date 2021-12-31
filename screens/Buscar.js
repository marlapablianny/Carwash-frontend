const { useState, useEffect } = require("react")
import React from "react"
import { render } from "react-dom"
import { View, KeyboardAvoidingView, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Buscar({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.TextInput}>
                <TextInput
                style={styles.input}
                placeholder="Pesquise por um  lava jato"
                autoCorrect={false}
                onChangeText={() => {}}>
                </TextInput>
            </View>
            <View style={styles.text0}>
                <Text style={styles.texto1}></Text>
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
        paddingTop: 200,
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
    }
})

