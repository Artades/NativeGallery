import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import OnBoarding from '../components/OnBoarding'
const LoginScreen = () => {
    return (
        <View style={styles.login}>
            <OnBoarding/>
        </View>
    );
};


const styles = StyleSheet.create({
    login: {
        width: "100%",
        flex: 1,
        backgroundColor: 'F3F3F3',
        alignItems: "center",
        justifyContent: 'center'
    },
})

export default LoginScreen;