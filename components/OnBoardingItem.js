import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View, Image} from "react-native";


const OnBoardingItem = ({item}) => {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.item, {width}]}>
<Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
 <View style={{ flex: 0.3}}>
     <Text style={styles.title}>{item.title}</Text>
     <Text style={styles.text}>{item.text}</Text>
 </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
      fontWeight: '800',
      fontSize: 28,
      marginBottom: 10,
      color: '#493d8a',
      textAlign: 'center'
    },
text: {
        fontWeight: '300',
        fontSize: 14,
        marginBottom: 10,
        color: '#62656b',
        textAlign: 'center',
    paddingHorizontal: 64,
    },
    image:{
      flex: 0.5,
      justifyContent: 'center',
        marginVertical: 30
    },


})

export default OnBoardingItem;