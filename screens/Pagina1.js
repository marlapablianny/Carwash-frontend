import React from "react"
import { View, Button, Text, KeyboardAvoidingView, StyleSheet, Image} from "react-native"
import MyButton from "../components/Button"

export default function Pagina1({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <Image style={styles.image} 
                    source={require('../assets/carwash.jpeg')}/>
            </View>
            <Text style={styles.texto1}>Os lava-jatos de onde estiver em suas mãos</Text>
            <Text style={styles.texto2}>Busca, agendamento</Text>            
            
            <View style={styles.b}>
                <MyButton text="Já Tenho uma Conta"
                    onPress={() => {
                        navigation.navigate("Login")
                    }}/>
        
                <MyButton text="Criar uma Conta"
                    onPress={() => {
                        navigation.navigate("Cadastro")
                    }}/>
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
        height: 180,
        width: 200,
        margin: 25,
    },
    b: {
        padding: 20,
    },
    texto1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})
