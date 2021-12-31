import React from "react"
import Expo from "expo"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text } from "react-native";
import {Ionicons}  from '@expo/vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-ionicons";

import Home from '../screens/Home';
import Buscar from '../screens/Buscar';
import Minhaconta from "../screens/Minhaconta";
import Meulavajato from "../screens/Meulavajato"
import Agendamentos from "../screens/Agendamentos";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='Inicio'
            component={Home} 
            options={{headerShown: false}}/>
            <Tab.Screen name='Buscar' component={Buscar} options={{headerShown: false}}/>
            <Tab.Screen name='Conta' component={Minhaconta} options={{headerShown: false}}/>
            <Tab.Screen name='Agendamentos' component={Agendamentos} options={{headerShown: false}}/>
            <Tab.Screen name='Meu lava-jato' component={Meulavajato} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}