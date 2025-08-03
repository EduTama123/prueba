import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

import { CommonActions, useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  //Navegacion por hooks de Reack Native  
  const navigation = useNavigation();
  //imagen de fondo
  const image = { uri: 'https://i.pinimg.com/736x/1c/77/2e/1c772e05669e4c65d6459e61ea53f893.jpg' };
  return (
    <View style={styles.container}>
      {/*componente imagen de fondo */}
      <ImageBackground source={image} resizeMode="cover" style={styles.imagenFondo}>
        <View style={styles.overlay} />
        {/*contenedor principal */}
        <View style={styles.containerLogin}>
          <Text style={styles.title}>Inicio de sesión</Text>
          {/* aqui va el input */}
          <Text style={styles.textoSubtitulo}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo@gmail.com"
            keyboardType="default"
          />
          <Text style={styles.textoSubtitulo}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Contraseña123"
            keyboardType="default"
          />
          {/* boton sin funcionalidad */}
          <TouchableOpacity style={styles.botonEstilo} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
            <Text style={styles.textoBotonEstilo}>INGRESAR</Text>
          </TouchableOpacity>
          <Text style={styles.textoSpam}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Usuario' }))}>
            <Text style={styles.spam}>👉 Comienza aquí 👈</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}
