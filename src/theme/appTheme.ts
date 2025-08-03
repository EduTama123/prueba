import { Button, StyleSheet } from "react-native";

//genstion de estilos
export const styles = StyleSheet.create({
    imagenFondo: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogin: {
        alignSelf: 'center',
        borderRadius: 8,
        width: '95%',


    },
    containerUsuario: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },
    textoSpam: {
        fontSize: 22,
        paddingTop: 30,
        textAlign: 'center',
        fontWeight: "bold",
    },
    spam: {
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'red',
    },
    input: {
        alignSelf: 'center',
        height: 50,
        width: '95%',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#000000ff',
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#ffffff',

    },
    botonEstilo: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'center',
    },
    textoBotonEstilo: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textoSubtitulo: {
        alignSelf: 'baseline',
        paddingTop: 10,
        right: -15,
        fontSize: 15,
        fontWeight: 'bold',
    },

})