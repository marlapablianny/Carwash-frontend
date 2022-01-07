const { useState, useEffect } = require("react")
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native"
import MyButton from "../components/Button"
import api from "../src/Services/Api"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native"


export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [logado, setLogado] = useState('')
    
    const singIn = async () => {
        const response =  await api.post('/auth/login', {
            email: email,
            password: password,
        });

        const {access_token} = response.data;

        await AsyncStorage.setItem('access_token', access_token);
        if(access_token) {
            setLogado(true)
            navigation.navigate('Home')
        } else {
            setLogado(false)
            Alert.alert('Login ou senha errados.')

        }

    }

    return(
        <KeyboardAvoidingView style={styles.container}>
                <Image style={styles.image}
                source={require('../assets/frame.svg')}/>
            <View style={styles.textInput}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                value={email}
                onChangeText={email => setEmail(email)}>
                </TextInput>
                <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                autoCorrect={false}
                value={password}
                onChangeText={password => setPassword(password)}>
                </TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.text}>
                    <Text onPress={() => {
                        navigation.navigate("Home")
                    }}>Esqueceu a senha</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.b}>
                <MyButton text="Entrar"
                    onPress={singIn}/>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',

    },
    image: {
        minWidth: 200,
        minHeight: 200,
        resizeMode: "contain"
    },
    input:{
        marginBottom: 20,
        color: '#cccccc',
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
    },
    textInput:{
        width: '80%',
    },
    b: {
        width: '50%'
    }
})

