import React from "react";
import {View, ImageBackground, StyleSheet , ScrollView} from "react-native";
import Images from "../assets/images";
import finallPrice from "../components/Amount"
import { useState } from "react";

const Buy = () =>{
    const [background, setbackground] = useState(Images.homeBackground)
    return(
        <View style = {{flex:1}}>
            <ImageBackground source={background} style = {{flex:1}}>
                <ScrollView>
                    {finallPrice}
                </ScrollView>
            </ImageBackground>
        </View>
    )
}
export default Buy