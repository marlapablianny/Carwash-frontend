import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

import Pagina2 from "../screens/Pagina2"
import Buscar from "../screens/Buscar"


const Tab = createBottomTabNavigator();

export default function Maincontainer(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'#cccccc',
                tabBarLabelStyle: {fontSize: 8, height: 10,},
                tabBarStyle: { backgroundColor: '#4a4a4a'},
                headerShown: false,

            }}
        >
        <Tab.Screen
            name='Home'
            component={Pagina2}
            options={{
                tabBarIcon: ({ color}) => (
                    <Ionicons name='home' size={22} color={color}/>
                ),
            }}/>

        <Tab.Screen
            name='Buscar'
            component={Buscar}
            options={{
                tabBarIcon: ({ color}) => (
                    <Ionicons name='search' size={22} color={color}/>
                        ),
                    }}/>


        </Tab.Navigator>
    )
}