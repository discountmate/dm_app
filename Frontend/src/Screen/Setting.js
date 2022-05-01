import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { setAuth } from '../redux/actions/common';

const Setting = () =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [btnClick, setbtnClick] = useState('')

    const CheckLogin = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false
          }).then(image =>{
            console.log(image.path)
            setImage({
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime,
          })
          });
    }

    return(
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.header}>Setting</Text>
            <View style={styles.tab}>
                <TouchableOpacity onPress={()=>setbtnClick('History')}>
                    <Text style={btnClick == 'History' && styles.activeTab}>
                        History
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:10}} onPress={()=>setbtnClick('Account')}>
                    <Text style={btnClick == 'Account' && styles.activeTab}>
                        Account
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:10}} onPress={()=>setbtnClick('Other')}>
                    <Text style={btnClick == 'Other' && styles.activeTab}>
                        Other
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
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
    }
}) 
export default Setting;