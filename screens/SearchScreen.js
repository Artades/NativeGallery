import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from "react-native";
import images from '../images';
import ImageItem from "../components/ImageItem";

const SearchScreen = () => {
    let[searchIsNone, setSearchIsNone] = useState(false);
    const [searchText, setSearchText] = useState('');
    const addSearch = (value) => setSearchText(value);
    const searchImages = useMemo(() => {
        const filtered =  images.filter((e)=> e.title.toLowerCase().includes(searchText.toLowerCase()));
        // if(filtered.length === 0) {
        //     setSearchIsNone(!searchIsNone);
        // }
        return filtered

    },[searchText, images]);
    return (
        <View style={styles.search}>
          <View style={style.searchBody}>
              <TextInput placeholder="Search..."
                         value={searchText}
                         onChangeText={addSearch}
              style={styles.input}
              />
              <FlatList data={searchImages}
                        scrollEventThrottle={32}
                        renderItem={ ({item}) => <ImageItem item={item}/> }
                        vertical
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        keyExtractor={(item) => item.id}
              />

          </View>
        </View>
    );
};


const styles = StyleSheet.create({
    search: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    searchBody:{
        alignItems: 'center',
    width: '100%',
    },
    input:{
        width: '80%',
        padding: 15,
        borderRadius: 7,
        marginVertical: 20,
        shadowColor: "#aeaeae",
        shadowOffset: {
            width: 0,
            height: 0,
            blur: 3,

        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderWidth: 0,
},


})

export default SearchScreen;