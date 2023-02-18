import React from 'react'
import {useState} from 'react'
import { View , ImageBackground , ScrollView , Text , StyleSheet , Image} from 'react-native'
import Images from '../assets/images'
import { Axios } from 'axios'
import Card from '../components/Amount'

const Pizza = () =>{
    const [background, setbackground] = useState(Images.homeBackground)
    const [vegetables,setvegetables] = useState(Images.vegetables)
    const [doubleCheese,setdoubleCheese] = useState(Images.doubleCheese)
    const [pineApple,setPinseApple] = useState(Images.pineApple)
    const [pepperoni , setPepperoni] = useState(Images.pepperoni)
    return(
        <ImageBackground source={background} style = {{flex:1}}>
            <ScrollView>
                <View style = {styles.orderboared}>
                    <Image source={vegetables} style = {styles.imagesStyle}/>
                    <Text style = {styles.Text}>{"Vegetables"}</Text>
                    <Text style = {styles.priceStyle}>{"price: 50"}</Text>
                    <Card/>
                </View>
                <View style = {styles.orderboared}>
                    <Image source={doubleCheese} style = {styles.imagesStyle}/>
                    <Text style = {styles.Text}>{"Double Cheese"}</Text>
                    <Text style = {styles.priceStyle}>{"Price: 60"}</Text>
                    <Card/>
                </View>
                <View style = {styles.orderboared}>
                <Image source={pineApple} style = {styles.imagesStyle}/>
                <Text style = {styles.Text}>{'Pineapple'}</Text>
                <Text style = {styles.priceStyle}>{'Price: 45'}</Text>
                <Card/>
                
                </View>
                <View style = {styles.orderboared}>
                    <Image source={pepperoni} style = {styles.imagesStyle}/>
                    <Text style = {styles.Text}>{'Pepperoni'}</Text>
                    <Text style = {styles.priceStyle}>{'Price: 50'}</Text>
                    <Card/>
                </View>
               

            </ScrollView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
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
       imagesStyle:{
        width:90,
        height:90,
        marginLeft:4,
        marginTop:4,
        borderRadius:10
       }
})
export default Pizza