import React from 'react';
import {View} from "react-native";
import {Text, StyleSheet, Animated,} from "react-native";
import {AntDesign} from '@expo/vector-icons'
import {TouchableOpacity} from "react-native";

import { useNavigation } from '@react-navigation/native';
const RedirectButton = () => {

const navigation = useNavigation();

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.redirectButton} onPress={() => navigation.navigate('Home')}>
                <AntDesign name="check" size={32} color="#fff"  />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    redirectButton:{
        position: 'absolute',
        backgroundColor: '#493d8a',
        borderRadius: 100,
        padding: 20,

    },

})
export default RedirectButton;