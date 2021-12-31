const { useState, useEffect } = require("react")
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button"
import Routes from "../components/routes"
import MyButton1 from "../components/Button1"


export default function Atualizaragenda({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.image}
                    source={require('../assets/user.png')}/>
                    <View style={styles.text0}>
                        <Text style={styles.texto1}> Limpa Car</Text>
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
        width: '60%',
        flexDirection: 'row',
        width: '90%'
    },
    text:{
        width:'90%',
        padding: 10,
        marginRight: 40,
    }, 
    text0:{
        width: '60%',
        padding: 41,
    },
    tab:{
        backgroundColor: '#cccccc'
    },
    TextInput:{
        width: '80%'
    },
    image: {
        height: 120,
        width: 120,
        margin: 25,
    },
    profile: {
        flexDirection: 'row',
    }, 
    texto3: {
        fontSize: 25,
        color: '#cccccc',
        fontWeight: 'bold',
        marginLeft: 30,
    },
    image1: {
        height: 18,
        width: 18,
        margin: 25,
       marginLeft: 3
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
    }
   
})

