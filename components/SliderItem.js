import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const ImageItem = ({item}) => {
    return (
        <View style={styles.item}>
            <ImageBackground  style={styles.itemImage} source={item.image} imageStyle={{ borderRadius: 20}}>
                <LinearGradient  colors={[ 'rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.imageBody}>
                            <Text style={styles.title}>{item.title}</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 200,
    },
    itemImage:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    imageBody:{
        padding: 15,
        height: "50%",
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: '800',
        fontSize: 16,
        marginBottom: 7,
        color: '#fefeff',
    },
})

export default ImageItem;