import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Modal, ImageBackground} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const ImageItem = ({item}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.item} >


                <ImageBackground  style={styles.itemImage} source={item.image} imageStyle={{ borderRadius: 20}}>
                    <LinearGradient  colors={[ 'rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.imageBody}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)} >
                            <Ionicons name="chevron-up" size={34} color="white" />
                        </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </ImageBackground>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <LinearGradient colors={[ 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)']} style={styles.modalBody}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.text,{margin: 10}]}>ID:{item.uniqueIDX}</Text>
                    <Text style={[styles.text,{margin: 10}]}>Released:{item.dateOfRelease}</Text>
                    <Text style={[styles.text,{margin: 10}]}>Price:{item.price}$</Text>

                    <View style={{flexDirection: 'row'}}>
                        <Button title={'Close'} onPress={() => setModalVisible(!modalVisible)}/>

                        <Button title={'Buy'} onPress={() => {
                            Alert.alert(`You just made a ${item.price}$ purchase: ${item.title}`
                            )
                            setModalVisible(!modalVisible);
                        }}
                        />
                    </View>
                </LinearGradient>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    item: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 330,
        height: 500,
    },
    itemImage:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    width: '100%',
        height: '100%',
    },
    imageBody:{
        padding: 40,


      height: "50%",
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'flex-end',

    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 7,
        color: '#fefeff',

    },
    text: {
        fontWeight: '300',
        fontSize: 14,
        color: '#d8d8d8',
        maxWidth: 200,
    },
    //Modal Window Styles

    modalBody:{
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },




})

export default ImageItem;