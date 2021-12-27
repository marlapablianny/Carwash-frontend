import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina3 from './screens/Pagina3';
import Pagina2 from './screens/Pagina2';
import Pagina1 from './screens/Pagina1';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Pagina1" 
        component={Pagina1}
        options={{headerShown: false}}/>
         <Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}}/>
          <Stack.Screen 
        name="Cadastro" 
        component={Cadastro}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="Pagina2" 
        component={Pagina2}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="Pagina3" 
        component={Pagina3}
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

