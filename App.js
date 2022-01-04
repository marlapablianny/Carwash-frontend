import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina3 from './screens/Pagina3';
import Home from './screens/Home';
import Pagina1 from './screens/Pagina1';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Buscar from './screens/Buscar';
import React from 'react';
import Routes from './components/routes';
import Minhaconta from './screens/Minhaconta';
import AgendamentosLava from './screens/AgendamentosLava';
import Atualizaragenda from './screens/Atualizaragenda';
import Detalhes from './screens/Detalhes';
import Agendar from './screens/Agendar';

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
        name="Home" 
        component={Routes}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="Pagina3" 
        component={Pagina3}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="Buscar" 
        component={Routes}
        options={{headerShown: false}}/>
        <Stack.Screen 
          name="MinhaConta" 
          component={Routes}
          options={{headerShown: false}}/>
           <Stack.Screen 
          name="Agendamentos" 
          component={Routes}
          options={{headerShown: false}}/>
           <Stack.Screen 
          name="Meulavajato" 
          component={Routes}
          options={{headerShown: false}}/>
           <Stack.Screen 
          name="AgendamentosLava" 
          component={AgendamentosLava}
          options={{headerShown: false}}/>
           <Stack.Screen 
          name="Atualizaragenda" 
          component={Atualizaragenda}
          options={{headerShown: false}}/>
          <Stack.Screen 
          name="Detalhes" 
          component={Detalhes}
          options={{headerShown: false}}/>
          <Stack.Screen 
          name="Agendar" 
          component={Agendar}
          options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

