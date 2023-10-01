import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function Cabecalho() {
    return(
        <View style={estilos.container}>
            <Text style={estilos.text}>Buscador de CEP</Text>
            <Text style={estilos.text}>Camilly Marian e Dennife Carolayne</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 18
    } 
})