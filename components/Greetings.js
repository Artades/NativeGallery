import React, {useState} from 'react';
import { FlatList, View, StyleSheet,Text, Image} from "react-native";
import sliderImages from "../sliderImages";
import SliderItem from "./SliderItem";

const Greeting = () => {

    return (
        <View style={styles.greeting}>
            <Text style={styles.greetingTitle}>Today's popular</Text>


            <View style={styles.greetingBody}>
                <FlatList data={sliderImages}
                          renderItem={ ({item}) => <SliderItem item={item}/> }
                          horizontal
                          bounces={false}
                          keyExtractor={(item) => item.id}
                          scrollEventThrottle={32}
                          showsHorizontalScrollIndicator={false}
                />

            </View>
        </View>
    );
};
const styles = StyleSheet.create({

    greeting: {
        width: '100%',
height: 300
    },
    greetingBody:{
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingTitle:{
        fontWeight: '800',
        fontSize: 20,
        color: '#493d8a',
        marginTop: 20,
        marginBottom: 20,
        left: 33,
// text-shadow: 0px 0px 5px rgba(161, 7, 255, 0.47);
    },



})
export default Greeting;