import React from "react"
import Expo from "expo"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text } from "react-native";
import {Ionicons}  from '@expo/vector-icons/Ionicons';

import Pagina2 from '../screens/Pagina2';
import Buscar from '../screens/Buscar';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#cccccc',
            tabBarLabelStyle: {fontSize: 8, height: 10,},
            tabBarStyle: {backgroundColor: '#000000'},
            headerShown: false,
        }}>
            <Tab.Screen name='Pagina2' 
                component={Pagina2}
                options={{tabBarIcon: ({color}) => (
                    <Ionicons name='home' size={22} color={color}/>
                )}}
            />

             <Tab.Screen name='Buscar' 
                component={Buscar}
                options={{tabBarIcon: ({color}) => (
                    <Ionicons name='search' size={22} color={color}/>
                )}}
            />
            
        </Tab.Navigator>
    )
}