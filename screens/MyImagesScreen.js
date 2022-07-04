import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View } from "react-native";




const MyImagesScreen = () => {

   return(
       <View style={styles.cart}>
<View style={styles.cartBody}>

</View>
       </View>
   )

};


const styles = StyleSheet.create({
    cart: {
        flex: 1,
        backgroundColor: 'F3F3F3',
        alignItems: "center",
        justifyContent: 'center'
    },
    cartBody:{
      justifyContent: 'center',
      alignItems: 'center',
        width: '100%',
    },
    cartItem: {
        width: '70%',
        elevation: 5,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 10,
    }
})

export default MyImagesScreen
