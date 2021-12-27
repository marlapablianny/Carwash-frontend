const { useState, useEffect } = require("react")
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"

export default function Cadastro({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.cadastro}>
                <Text style={styles.c}> Cadastre-se</Text>
            </View>
            <View style={styles.textInput}>
                <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCorrect={false}
                onChangeText={() => {}}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Telefone"
                autoCorrect={false}
                onChangeText={() => {}}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Endereço"
                autoCorrect={false}
                onChangeText={() => {}}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={() => {}}>
                </TextInput>

                <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => {}}>
                </TextInput>
            </View>
            <View style={styles.textofinal}>
                <TouchableOpacity style={styles.text}>
                    <Text>Ao criar sua conta você concorda com nossos termo de serviços e politicas de privacidade</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.b}>
                <MyButton text="Cadastrar"
                    onPress={() => {
                        navigation.navigate("Pagina1")
                    }}/>
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
    }, 
    cadastro:{
        marginRight: '40%',
        padding: 7
    },
    textofinal:{
        width: '90%',
        padding: 10
    }
})

