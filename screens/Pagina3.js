const { useState, useEffect } = require("react")
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"

export default function Pagina3({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
              <View style={styles.imade1}>
                <Image style={styles.image}
                source={require('../assets/home.png')}/>
            </View>
            <View style={styles.cadastro}>
                <Text style={styles.c}> Cadastre seu Lava-jato</Text>
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
            </View>
            <View style={styles.b}>
                <MyButton text="Cadastrar"
                    onPress={() => {
                        navigation.navigate("Home")
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
        width: '80%',
    },
    c: {
        fontSize: 22,
        color:'#4A4A4A',
    },
    b: {
        width: '60%'
    }, 
    cadastro:{
        padding: 15
    },
    textofinal:{
        width: '80%',
        padding: 10
    },
    image: {
        height: 57,
        width: 280,
        margin: 50,
        alignItems: 'center',
    },
    image1:{
        marginTop: 0,
    }
})

