import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from "react-native";
import images from '../images';
import ImageItem from "../components/ImageItem";
import {Ionicons} from "@expo/vector-icons";
import {ScrollView} from "react-native";

const SearchScreen = () => {
    let[searchIsNone, setSearchIsNone] = useState(false);
    const [searchText, setSearchText] = useState('');
    const addSearch = (value) => setSearchText(value);
    const searchImages = useMemo(() => {
        return images.filter((e)=> e.title.toLowerCase().includes(searchText.toLowerCase()))
    },[searchText, images]);
    return (
        <ScrollView style={styles.search}>
          <View style={styles.searchBody}>
              <View style={styles.searchAction}>
                  <TextInput placeholder="Enter the title"
                             value={searchText}
                             onChangeText={addSearch}
                             style={styles.input}
                  />
                  <Ionicons name="search-outline" size={25} color="#493d8a" />
              </View>
              {
               !searchIsNone
                   ?
                   searchImages.map((item,id) => <ImageItem item={item} key={item.id}/> )
                   :
                   <Text>
                       The Image with this title was not found
                   </Text>


              }
          </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    search: {
       width: '100%',

    },
    searchBody:{
        alignItems: 'center',
    width: '100%',
    },
    input:{
        width: '70%',
        paddingVertical: 10,

},
    searchAction:{
        width: "100%",
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default SearchScreen;