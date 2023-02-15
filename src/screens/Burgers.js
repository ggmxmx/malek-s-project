import { View, Text, TextInput, StyleSheet, Button, Image,ScrollView ,Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Card from '../components/Amount'
import images from '../assets/images'
// import { Pressable } from 'react-native/Libraries/Components/Pressable/Pressable'
const Burgers = () =>{
    const [cheeseBurger,setcheeseBurger] = useState(images.cheeseburger);
    const [chickenburger,setchickenburger] = useState(images.chickenburger);
    const [fishburger,setfishburger] = useState(images.fishburger);
    const [doubleburger,setdoubleburger] = useState(images.doubleburger);
    const [amount,setamount] = useState(0);
    const [amount2,setamount2] = useState(0);
    const [amount3,setamount3] = useState(0);
    const [amount4,setamount4] = useState(0);

   
    return(
        <ScrollView>
            <View style = {styles.orderboared}>
                <Image style = {styles.imagesStyle} source={cheeseBurger}/>
                <Text style = {styles.Text}>{'Cheese Burger'}</Text>
                <Text style = {styles.priceStyle}>{"price: 20"}</Text>
                <Card/>
            </View>

            <View style = {styles.orderboared}>
                <Image source={chickenburger} style = {styles.imagesStyle}/>
                <Text style = {styles.Text}>Chicken burger</Text>
                <Text style = {styles.priceStyle}>{"price: 20"}</Text>
                <Card/>

            </View>

            <View style = {styles.orderboared}>
                <Image source={doubleburger} style = {styles.imagesStyle}/>
                <Text style = {styles.Text}>{"Double burger"}</Text>
                <Text style = {styles.priceStyle}>{"price: 30"}</Text>
                <Card/>
            </View>

            <View style = {styles.orderboared}>
                <Image source={fishburger} style = {styles.imagesStyle}/>
                <Text style = {styles.Text}>{"Fish burger"}</Text>
                <Text style = {styles.priceStyle}>{"price: 15"}</Text>
                <Card/>

            </View>

        </ScrollView>
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
        borderColor:'black'
    },
    orderboared:{
        flex:1,
        borderWidth:1,
        borderRadius:10,
        marginTop:1,
        marginHorizontal:10,
        borderColor:'rgba(0,0,0,0.3)',
        marginBottom:15
       },
       Text:{
        alignSelf:'center',
        fontSize:30,
        marginTop:-65,
        marginBottom:30,
        color:'black',
        marginLeft:50
       },
       priceStyle:{
        alignSelf:'center',
        fontSize:20,
        marginTop:-10,
        color:'rgba(0,0,0,0.8)'
       },
       amountStyle:{
        alignSelf:'center',
        fontSize:20,
       }
})
export default Burgers