import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"

export default function MyButtonx({text, onPress}) {
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
        paddingVertical: 1,
        margin: 5,
    },
    buttonText: {
        color: '#87ceeb',
        fontWeight: 'bold',
        fontSize: 15,
    }
})

