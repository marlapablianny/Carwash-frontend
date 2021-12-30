const { useState, useEffect } = require("react")
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"

export default function Home({navigation}) {
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
                <Text style={styles.texto1}>Seja Bem Vindo ao 
                Car Wash</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.texto2}>O aplicativo Car Wash é um aplicativo onde o usuário pode buscar um 
                    lava-jato perto de sua localização e assim ter acesso ao seu serviço, 
                    podendo tambem agendar um dia e horário.</Text>
            </View>
            <View style={styles.b}>
                <MyButton text="Cadastrar Lava-jato"
                    onPress={() => {
                        navigation.navigate("Pagina3")
                    }}/>
            </View>
            {/* <NavigationContainer> */}
            {/* </NavigationContainer> */}
                    
            
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
    }
})

