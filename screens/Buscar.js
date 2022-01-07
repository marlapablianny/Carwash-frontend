const { useState, useEffect } = require("react")
import React from "react"
import { View, KeyboardAvoidingView, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton2 from "../components/Button2"


export default function Buscar({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.input1}>
                <View style={styles.TextInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquise por um  lava jato"
                    autoCorrect={false}
                    onChangeText={() => {}}>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Buscar')
                    }}>
                    <Image style={styles.image2} source={require('../assets/loupe.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/user.png')}/>
                <View style={styles.tab}>
                    <Text style={styles.name1}>Brilho Car</Text>
                    <Text style={styles.descricao}>Trabalhamos com lavagem de carro</Text>
                    <Text style={styles.endereco}>Endereço: Rua Chico Targino</Text>
                    <Text style={styles.cidade}>Cidade: Natal</Text>
                    <MyButton2 text="Agendar horário"
                        onPress={() => {
                            navigation.navigate("Agendar")
                        }}/>
                </View>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../assets/user.png')}/>
                <View style={styles.tab}>
                    <Text style={styles.name1}>Brilho Car</Text>
                    <Text style={styles.descricao}>Trabalhamos com lavagem de carro</Text>
                    <Text style={styles.endereco}>Endereço: Rua Napoleão Bezerra</Text>
                    <Text style={styles.cidade}>Cidade: Currais Novos</Text>
                    <MyButton2 text="Agendar horário"
                        onPress={() => {
                            navigation.navigate("Agendar")
                        }}/>
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
        paddingTop: 200,
    },
    input:{
        marginBottom: 70,
        color: '#ccc',
        fontSize: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#cccccc",
        padding: 8, 
        marginRight: 10,
        marginLeft: 30
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
        width: '93%',
        flexDirection: 'row',
        padding: 10,
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
        marginEnd: 30,
        marginLeft: 4,
        marginVertical: 2
    },
    TextInput:{
        width: '82%'
    },
    servico: {
        flexDirection: 'row',
        width:'80%', 
    },
    image1: {
        height: 60,
        width: 60,
        margin: 18,
       marginLeft: 2
    },
    name1: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        marginRight: 90,
    },
    descricao: {
        fontSize: 15,
        marginLeft: 2,
        marginHorizontal: 8,
        color: '#4a4a4a'
    },
    endereco: {
        fontSize: 15,
        marginLeft: 2,
        marginHorizontal: 8,
        color: '#4a4a4a'
    },
    cidade: {
        fontSize: 15,
        marginLeft: 2,
        marginHorizontal: 8,
        color: '#4a4a4a'
    },
    image2: {
        height: 30,
        width: 30,
        margin: 10,
        marginRight: 20
    },
    input1 :{ 
        flexDirection: 'row',
    }
})

