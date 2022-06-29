import React from 'react';
import {StyleSheet, Text, View} from "react-native";


const SettingsScreen = () => {
    return (
        <View style={styles.settings}>
            <Text>Settings</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    settings: {
        flex: 1,
        backgroundColor: 'F3F3F3',
        alignItems: "center",
        justifyContent: 'center'
    },
})

export default SettingsScreen;