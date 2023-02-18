import React from "react";
import {useState} from 'react'
import { View , ScrollView , SafeAreaView , Image , ImageBackground ,Text , StyleSheet } from "react-native";
import { Axios } from "axios";
import Images from "../assets/images";
import Card from "../components/Amount";
const FriedCicken = () =>{
    const [background,setbackground] = useState(Images.homeBackground)
    const [bucket, setbucket] = useState(Images.bucket)
    const [carton, setcarton] = useState(Images.carton)
    const [smallCarton, setSmallCarton] = useState(Images.smallCarton)
    
    
    return(
        <ImageBackground source={background} style = {{flex:1}}>
       <ScrollView>
        
        <View style = {styles.orderboared}>
                <Image source={bucket} style = {styles.imagesStyle}/>
                <Text style = {styles.Text}>{'Bucket'}</Text>
                <Text style = {styles.priceStyle}>{'Price: 40'}</Text>
                <Card/>
        </View>
        <View style = {styles.orderboared}>
            <Image source={carton} style = {styles.imagesStyle}/>
            <Text style = {styles.Text}>{'Carton'}</Text>
            <Text style = {styles.priceStyle}>{'price: 25'}</Text>
            <Card/>
        </View>
        <View style = {styles.orderboared}>
            <Image source={smallCarton} style = {styles.imagesStyle}/>
            <Text style = {styles.Text}>{'Small Carton'}</Text>
            <Text style = {styles.priceStyle}>{'price: 15'}</Text>
            <Card/>
        </View>
       

       </ScrollView>
        </ImageBackground>
    ) 
}
const styles = StyleSheet.create({
    imagesStyle:{
        width:90,
        height:90,
        marginLeft:4,
        marginTop:4,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'gray'
    },
    orderboared:{
        flex:1,
        borderWidth:1,
        borderRadius:10,
        marginTop:1,
        marginHorizontal:10,
        borderColor:'rgba(255,255,255,0.7)',
        marginBottom:15,
        backgroundColor:'rgba(100,100,100,0.3)'
       },
       Text:{
        alignSelf:'center',
        fontSize:30,
        marginTop:-65,
        marginBottom:30,
        color:'white',
        marginLeft:50
       },
       priceStyle:{
        alignSelf:'center',
        fontSize:20,
        marginTop:-10,
        color:'rgba(255,255,255,0.8)'
       },
       amountStyle:{
        alignSelf:'center',
        fontSize:20,
        color:'white'
       }

})
export default FriedCicken;