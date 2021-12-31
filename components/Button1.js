import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"

export default function MyButton1({text, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 40,
        paddingVertical: 8,
        paddingHorizontal: 12,
        margin: 10,
        backgroundColor: '#87ceeb',
    },
    buttonText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    }
})

