import React from 'react';
import {View} from "react-native";
import {Text, StyleSheet, Animated,} from "react-native";

import {AntDesign} from '@expo/vector-icons'
import {TouchableOpacity} from "react-native";


const NextButton = ({ scrollTo}) => {

    return (
      <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={scrollTo}>
              <AntDesign name="arrowright" size={32} color="#fff"  />
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
    button:{
position: 'absolute',
        backgroundColor: '#493d8a',
        borderRadius: 100,
        padding: 20,

    },

})
export default NextButton;