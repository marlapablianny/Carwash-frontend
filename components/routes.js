import React from "react"
import Expo from "expo"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text } from "react-native";
import {Ionicons}  from '@expo/vector-icons/Ionicons';

import Home from '../screens/Home';
import Buscar from '../screens/Buscar';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Tab.Screen name='Buscar' component={Buscar} options={{headerShown: false}}/>
            <Tab.Screen name='Minhaconta' component={Minhaconta} options={{headerShown: false}}/>
            <Tab.Screen name='Agendamentos' component={Agendamentos} options={{headerShown: false}}/>
            <Tab.Screen name='Meulavajato' component={Meulavajato} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}