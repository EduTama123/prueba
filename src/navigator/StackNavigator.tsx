import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { UsuarioScreen } from '../screens/UsuarioScreen';


//Definir los screens parte de la navegacion y parametros
//Navegacion por propiedades de StackNavigator
export type RootStackParams={
  Login: undefined,
  Usuario: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () =>{
  return (
    <Stack.Navigator
    //initialRouteName= 'Pantalla2'
      screenOptions={{
        //headerShown: false
        headerStyle:{
          elevation: 0
        }
      }}>
      <Stack.Screen name="Login" options={{title: 'Registro'}} component={LoginScreen} />
      <Stack.Screen name="Usuario" component={UsuarioScreen} />
    </Stack.Navigator>
  );
}