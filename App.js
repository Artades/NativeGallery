import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
const Tab = createBottomTabNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({


                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Introduction') {
                            iconName = focused
                                ? 'bulb'
                                : 'bulb-outline';
                        } else if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        }else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === 'My Images') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#493d8a',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Introduction" component={LoginScreen}/>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1,
      backgroundColor: 'F3F3F3',
        alignItems: "center",
      justifyContent: 'center'
    },
})
export default App;