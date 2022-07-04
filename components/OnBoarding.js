import React, {useRef, useState} from 'react';
import {Animated, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import slides from '../slides'
import OnBoardingItem from './OnBoardingItem';
import Paginator from '../components/Paginator'
import NextButton from '../components/NextButton';

import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
    const navigation = useNavigation();
    const[currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef( new Animated.Value(0)).current;
const slidesRef = useRef(null);
    const viewableItemChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1 ) {
            slidesRef.current.scrollToIndex({index: currentIndex +1 })

        }
        else{
            navigation.navigate('Home')
            console.log('Last Item');
        }
    }

    return (
        <View style={styles.greet}>
            <View style={{flex: 3}}>


           <FlatList data={slides}
                     renderItem={ ({item}) => <OnBoardingItem item={item}/> }
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     pagingEnabled
                     bounces={false}

                     keyExtractor={(item) => item.id}
                     onScroll={Animated.event([{ nativeEvent: {contentOffset: {x: scrollX}}}], {
                         useNativeDriver: false,
                     })}
                     scrollEventThrottle={32}
                     onViewableItemsChanged={viewableItemChanged}
                     viewabilityConfig={viewConfig}
                     ref={slidesRef}
           />
            </View>
            <Paginator data={slides} scrollX={scrollX}/>
            <View style={styles.buttonContainer}>
                <NextButton scrollTo={scrollTo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    greet: {
flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default OnBoarding;