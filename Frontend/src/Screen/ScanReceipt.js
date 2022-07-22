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
import api from '../core/Service';


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
    const cancelPhoto = (image) => {
        setImage('')
        imagelist.length = 0
        console.log(imagelist)
    
    }

    const renderPhoto = (image) => {
        return(
            <Image
            style={styles.photo}
            source={{uri:image.uri}}/>
        )
    }

    const submitPhoto = async () => {
        const bodyFormData = new FormData();
        bodyFormData.append('image', {
            uri: image.uri,
            type: 'image/jpeg',
            name: 'image.png',
          });
 
          
       
        await axios({
            url:`${api}/receipt`,
            method:'POST',
            headers: { 'Content-Type': 'multipart/form-data'},
            data:bodyFormData
        })
        .then(function (response){
            console.warn('Upload successful')
            setImage('')
            imagelist.length = 0
            navigation.goBack()
        })
        .catch(function (error){
            console.warn('Upload failed, Please try again')
            setImage('')
            imagelist.length = 0
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
            <TouchableOpacity style={styles.cancelbtn} onPress={cancelPhoto}>
                <Text style={styles.btn_text}>Cancel</Text>
            </TouchableOpacity>
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
    cancelbtn:{
        marginTop:20,
        backgroundColor: 'black',
        paddingVertical: 10,
        marginHorizontal: 30
        
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