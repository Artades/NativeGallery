import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    Button,
    Alert,
    ScrollView,
    ImageBackground
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import images from '../images';
import ImageItem from "../components/ImageItem";
import {Ionicons} from "@expo/vector-icons";
import image1 from "../assets/images/image1.png";
const Categories = () => {
    const [modalVisibleForSpace, setModalVisibleForSpace] = useState(false);
    const [modalVisibleForNature, setModalVisibleForNature] = useState(false);
    const [modalVisibleForColorful, setModalVisibleForColorful] = useState(false);
    const [modalVisibleForAbstract, setModalVisibleForAbstract] = useState(false);

   const spaceImages = images.filter(image => image.type === 'space');
   const natureImages = images.filter(image => image.type === 'nature');
    const colorfulImages = images.filter(image => image.type === 'colorful');
    const abstractImages = images.filter(image => image.type === 'abstract');

    const naturePercent = Math.round((natureImages.length / images.length) * 100);
    const spacePercent = Math.round((spaceImages.length / images.length) * 100);
    const colorfulPercent = Math.round((colorfulImages.length / images.length) * 100);
    const abstractPercent = Math.round((abstractImages.length / images.length) * 100);
    return (
     <View style={styles.categories}>
         <Text style={styles.categoriesTitle}>Categories</Text>
             <View style={styles.categoriesSection}>
             <TouchableOpacity onPress={() => setModalVisibleForNature(!modalVisibleForNature)}><View style={styles.card}><Text style={styles.cardText}>Nature</Text></View></TouchableOpacity>
             <TouchableOpacity  onPress={() => setModalVisibleForSpace(!modalVisibleForSpace)}><View style={styles.card}><Text style={styles.cardText}>Space</Text></View></TouchableOpacity>
             <TouchableOpacity onPress={() => setModalVisibleForColorful(!modalVisibleForColorful)}><View style={styles.card}><Text style={styles.cardText}>Colorful</Text></View></TouchableOpacity>
             <TouchableOpacity onPress={() => setModalVisibleForAbstract(!modalVisibleForAbstract)}><View style={styles.card}><Text style={styles.cardText}>Abstract</Text></View></TouchableOpacity>

         </View>




         {/*//Nature*/}
         <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisibleForNature}
             onRequestClose={() => {
                 setModalVisibleForNature(!modalVisibleForNature);
             }}
         >
             <LinearGradient colors={[ 'rgb(255,255,255)', 'rgb(255,255,255)']} style={styles.modalBody}>
                 <View style={styles.header}>
                     <TouchableOpacity style={styles.button} onPress={() => setModalVisibleForNature(!modalVisibleForNature)} >
                         <Ionicons name="caret-back-circle-outline" size={28} color="#000" />
                     </TouchableOpacity>
                     <Text style={styles.modalText}>Nature Category</Text>
                     <TouchableOpacity style={styles.button} onPress={() => Alert.alert(`Percentage: ${naturePercent}%`)} >
                         <Ionicons name="analytics-outline" size={28} color="#000" />
                     </TouchableOpacity>
                 </View>
                 <ScrollView
                     showsVerticalScrollIndicator={false}
                 >

                     {
                         natureImages.map((item, id) => <ImageItem item={item} key={item.id}/>)
                     }
                 </ScrollView>
             </LinearGradient>
         </Modal>


         {/*//Space*/}
         <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisibleForSpace}
             onRequestClose={() => {
                 setModalVisibleForSpace(!modalVisibleForSpace);
             }}
         >
             <LinearGradient colors={[ 'rgb(255,255,255)', 'rgb(255,255,255)']} style={styles.modalBody}>
                 <View style={styles.header}>
                     <TouchableOpacity style={styles.button} onPress={() => setModalVisibleForSpace(!modalVisibleForSpace)} >
                         <Ionicons name="caret-back-circle-outline" size={28} color="#000" />
                     </TouchableOpacity>
                     <Text style={styles.modalText}>Space Category</Text>
                     <TouchableOpacity style={styles.button} onPress={() => Alert.alert(`Percentage: ${spacePercent}%`)} >
                         <Ionicons name="analytics-outline" size={28} color="#000" />
                     </TouchableOpacity>
                 </View>
                 <ScrollView
                     showsVerticalScrollIndicator={false}
                 >
                     {
                         spaceImages.map((item, id) => <ImageItem item={item} key={item.id}/>)
                     }
                 </ScrollView>
             </LinearGradient>
         </Modal>


         {/*//Colorful*/}
         <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisibleForColorful}
             onRequestClose={() => {
                 setModalVisibleForColorful(!modalVisibleForColorful);
             }}
         >
             <LinearGradient colors={[ 'rgb(255,255,255)', 'rgb(255,255,255)']} style={styles.modalBody}>

                 <View style={styles.header}>
                     <TouchableOpacity style={styles.button} onPress={() => setModalVisibleForColorful(!modalVisibleForColorful)} >
                         <Ionicons name="caret-back-circle-outline" size={28} color="#000" />
                     </TouchableOpacity>
                     <Text style={styles.modalText}>Colorful Category</Text>
                     <TouchableOpacity style={styles.button} onPress={() => Alert.alert(`Percentage: ${colorfulPercent}%`)} >
                         <Ionicons name="analytics-outline" size={28} color="#000" />
                     </TouchableOpacity>
                 </View>
                 <ScrollView
                     showsVerticalScrollIndicator={false}
                 >
                     {
                         colorfulImages.map((item, id) => <ImageItem item={item} key={item.id}/>)
                     }
                 </ScrollView>
             </LinearGradient>
         </Modal>


         {/*//Abstract*/}
         <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisibleForAbstract}
             onRequestClose={() => {
                 setModalVisibleForAbstract(!modalVisibleForAbstract);
             }}
         >
             <LinearGradient colors={[ 'rgb(255,255,255)', 'rgb(255,255,255)']} style={styles.modalBody}>
                 <View style={styles.header}>
                     <TouchableOpacity style={styles.button} onPress={() => setModalVisibleForAbstract(!modalVisibleForAbstract)} >
                         <Ionicons name="caret-back-circle-outline" size={28} color="#000" />
                     </TouchableOpacity>
                     <Text style={styles.modalText}>Abstract Category</Text>
                     <TouchableOpacity style={styles.button} onPress={() => Alert.alert(`Percentage: ${abstractPercent}%`)} >
                         <Ionicons name="analytics-outline" size={28} color="#000" />
                     </TouchableOpacity>
                 </View>
                 <ScrollView
                     showsVerticalScrollIndicator={false}
                 >
                     {
                         abstractImages.map((item, id) => <ImageItem item={item} key={item.id}/>)
                     }
                 </ScrollView>
             </LinearGradient>
         </Modal>



     </View>

    );
};
const styles = StyleSheet.create({
    categories:{
        width: '100%',


    },
    categoriesTitle:{
        fontWeight: '800',
        fontSize: 20,
        color: '#493d8a',
        marginTop: 20,
        marginBottom: 20,
        left: 33,
// text-shadow: 0px 0px 5px rgba(161, 7, 255, 0.47);
    },
    categoriesSection: {
        width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card:{
        width: 300,
        height: 70,
        margin: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: '#fff',
        shadowColor: "#493d8a",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 5,
    },
    cardText:{
        fontWeight: '500',
        fontSize: 16,
        color: '#493d8a',

    },
    modalBody:{
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
    },
    modalText:{
        fontWeight: '800',
        fontSize: 20,
        color: '#493d8a',
        textAlign: 'center',
    }
})
export default Categories;