import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
// import RNFetchBlob from 'rn-fetch-blob';


const imagelist = []
const Setting = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState(null)

    useEffect(() => {
        if (image) {
            imagelist.push(image)
            console.log(imagelist)
        }
    },[image])

    const takePhoto = async () => {
       await ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
          }).then(image => {
            setImage({
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
            })
           
          });
    }

    const choosePhoto = async () => {
        await ImagePicker.openPicker({
             width: 300,
             height: 400,
             cropping: false,
           }).then(image => {
             setImage({
                 uri: image.path,
                 width: image.width,
                 height: image.height,
                 mime: image.mime,
             })
            
           });
     }

    const renderPhoto = (image) => {
        return(
        <Image
        style={styles.photo}
        source={{uri:image.uri}}/>
        )
    }

    const submitPhoto = async () => {
        // const postobj = {
        //     uri: image.uri,
        //     type: 'image/png',
        //     name: 'image.png',}


        const bodyFormData = new FormData();
        bodyFormData.append('image', {
            uri: image.uri,
            type: image.mine,
            name: 'image.png',
          });
        //   console.log(bodyFormData)
        // await axios.post("http://192.168.1.5:3000/receipt",bodyFormData)
        // .then(function (response) {
        //     console.warn(response);
        //     })
        // .catch(function (error) {   
        //     console.warn(error);
        //     return;
        // })
       
        
        await axios({
            url:"http://192.168.1.5:3000/receipt",
            method:'POST',
            // headers: { 'Content-Type': 'multipart/form-data'},
            data:bodyFormData
        })
        .then(function (response){
            console.log(response)
        })
        .catch(function (error){
            console.log(error)
            return;
        })
      
        
      
    }

    return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.header}>Scan Receipt</Text>
            {image?
            <View>
            {imagelist.map(i => renderPhoto(i))}
            {renderPhoto(image)}
            </View> : null}
            <TouchableOpacity style={styles.btn} onPress={takePhoto}>
                <Text style={styles.btn_text}>Take a Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={choosePhoto}>
                <Text style={styles.btn_text}>Choose from Photos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={submitPhoto}>
                <Text style={styles.btn_text}>Submit</Text>
            </TouchableOpacity>
           
        </ScrollView>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        marginTop: 17,
        paddingHorizontal: 32,
        justifyContent:"center",
    },

    header:{
        fontSize: 24,
        fontWeight:'bold',
        color:'black',
    },

    tab:{
        flexDirection:'row',
        marginTop: 28,
        justifyContent:'flex-start'
    },

    btn:{
        marginTop:20,
        backgroundColor: 'black',
        borderRadius: 50,
        paddingVertical: 17
        
    },
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 15,
    },

    activeTab:{
        color:'black',
    },

    photo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
      },
}) 
export default Setting;