import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { api } from '../Servicos/api';

export function Principal() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [uf, setUf] = useState("")
    
    async function buscar(){
        if(cep == ""){
            Alert.alert("Cep inválido")
            setCep("")
        }

        try{
            const response = await api.get(`/${cep}/json/`)
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setLocalidade(response.data.localidade)
            setUf(response.data.uf)
            } catch(error) {
                console.log("Error" + error)
        }
    }

    return(
        <View style={estilos.container}>
             
            <Text style={estilos.text}>Buscar CEP</Text>
        
            <View>
                <TextInput value={cep} onChangeText={(texto) => setCep(texto)} style={estilos.input} placeholder="Digite um Cep"/>

                <TouchableOpacity style={estilos.button} onPress={buscar}>
                    <Text>Buscar</Text>
                </TouchableOpacity>
                
            </View>
            
            <TextInput value={localidade} onChangeText={(texto) => setLocalidade(texto)} style={estilos.informacao} />
            <TextInput value={uf} onChangeText={(texto) => setUf(texto)} style={estilos.informacao} />
            <TextInput value={bairro} onChangeText={(texto) => setBairro(texto)} style={estilos.informacao} />
            <TextInput value={logradouro} onChangeText={(texto) => setLogradouro(texto)} style={estilos.informacao} />
           
    </View>
    
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        paddingVertical: 150
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#c3c3c3',
        paddingHorizontal: 100,
        paddingVertical: 10
    },
    button: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3c3c3',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    informacao: {
        textAlign: 'center'
    }

})