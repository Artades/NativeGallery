import React from 'react';
import {  StyleSheet,  View} from "react-native";
import Greeting from "../components/Greetings";
import {ScrollView} from "react-native";
import Categories from "../components/Categories";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "../components/About";

const HomeScreen = () => {

    return (
        <ScrollView style={styles.home}>
<Greeting/>
<Categories/>
<About/>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    home: {
        width: "100%",
    },



})

export default HomeScreen;