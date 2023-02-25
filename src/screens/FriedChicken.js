import React from "react";
import {useState} from 'react'
import { View , ScrollView , SafeAreaView , Image , ImageBackground ,Text , StyleSheet } from "react-native";
import { Axios } from "axios";
import Images from "../assets/images";
const FriedCicken = () =>{
    const [background,setbackground] = useState(Images.homeBackground)
    return(
        <View>
        <ImageBackground source={background}>
            
        </ImageBackground>
        </View>
    ) 
}
export default FriedCicken;
