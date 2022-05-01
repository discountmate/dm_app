import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


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

    const renderPhoto = (image) => {
        return(
        <Image
        style={styles.photo}
        source={{uri:image.uri}}/>
        )
    }

    const submitPhoto = () => {
        setImage('')
        imagelist.length = 0
        navigation.goBack()
    }

    return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.header}>Scan Receipt</Text>
            <TextInput placeholder='title'></TextInput> 
            {image?
            <View>
            {imagelist.map(i => renderPhoto(i))}
            {renderPhoto(image)}
            </View> : null}
            <TouchableOpacity style={styles.btn} onPress={takePhoto}>
                <Text style={styles.btn_text}>Take a Photo</Text>
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