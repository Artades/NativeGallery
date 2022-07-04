import React from 'react';
import {Text, View, StyleSheet, Button, Linking} from "react-native";



const About = () => {

    return (
        <View style={styles.greeting}>
            <Text style={styles.aboutTitle}>About Me</Text>
            <View style={styles.aboutBody}>
<Text style={styles.textTitle}>Artyom Galay</Text>
                <Text style={[styles.textParagraph, {color: 'rgba(6,6,12,0.42)'}]}>Developer</Text>
                <Text style={[styles.textParagraph, {color: 'rgba(36,36,90,0.99)'}]}>17 y.o</Text>
                <View style={styles.socialRow}>

                    <Button color={'#f83939'}  title={'YouTube'} onPress={() => Linking.openURL('https://youtube.com/channel/UCG5QeDT5DKU8TX_FU1fHQ6Q')} />
                    <Button color={'#ef61b2'} title={'Instagram'} onPress={() => Linking.openURL('http://instagram.com/unsplash?igshid=YmMyMTA2M2Y=')}/>
                    <Button  title={'Web'} onPress={() => Linking.openURL('http://unsplash.com')}/>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({

    about: {
        width: '100%',
    },
    aboutBody:{
        width: "100%",

        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutTitle:{
        fontWeight: '800',
        fontSize: 20,
        color: '#493d8a',
        marginTop: 20,
        marginBottom: 20,
        left: 33,
// text-shadow: 0px 0px 5px rgba(161, 7, 255, 0.47);
    },
    textTitle: {
        fontWeight: '600',
        fontSize: 16,
        color: '#06060c',

        marginBottom: 15,
    },
    textParagraph:{
        fontWeight: '400',
        fontSize: 12,
        marginBottom: 15,
    },
    socialRow:{
      flexDirection: 'row',
      alignItems: 'center',
        marginVertical: 10,
    },





})
export default About;