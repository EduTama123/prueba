import React from 'react'
import { Button, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/core';

//imagen de fondo
const image = { uri: 'https://i.pinimg.com/736x/1c/77/2e/1c772e05669e4c65d6459e61ea53f893.jpg' };


export const UsuarioScreen = () => {
    //Navegacion por hooks de Reack Native  
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imagenFondo}>
                <View style={styles.overlay} />
                <View style={styles.containerUsuario}>
                    <Text style={styles.title}>Crear cuenta</Text>
                    {/* aqui va el input */}
                    <Text style={styles.textoSubtitulo}>Ingrese su nombre: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        keyboardType="default"
                    />
                    <Text style={styles.textoSubtitulo}>Ingrese su apellido: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Apellido"
                        keyboardType="default"
                    />
                    <Text style={styles.textoSubtitulo}>Ingrese su correo: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ejemplocorreo@gmail.com"
                        keyboardType="default"
                    />
                    <Text style={styles.textoSubtitulo}>Ingrese su usuario: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="NuevoUsuario"
                        keyboardType="default"
                    />
                    <Text style={styles.textoSubtitulo}>Ingrese su contraseña: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña123"
                        keyboardType="default"
                    />
                    {/* Boton de regreso */}
                    <TouchableOpacity style={styles.botonEstilo} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                        <Text style={styles.textoBotonEstilo}>REGISTRARME</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View >
    )
}
