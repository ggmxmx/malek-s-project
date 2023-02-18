import React from 'react'
import {useState} from 'react'
import { View , StyleSheet , ScrollView , Image , ImageBackground , Text} from 'react-native'
import Images from '../assets/images'
import Card from '../components/Amount'


const Other = () => {
    const [background,setbackground] = useState(Images.homeBackground)
    const [potato,srtPotato] = useState(Images.potato)

    return(
        <ImageBackground source={background} style = {{flex:1}}>
        <ScrollView>
            <View style = {styles.orderboared}>
                <Image source={potato} style = {styles.imagesStyle}/>
                <Text style = {styles.Text}>{'Potato'}</Text>
                <Text style = {styles.priceStyle}>{'Price: 5'}</Text>
                <Card/>
            </View>
        </ScrollView>
        </ImageBackground>
    )
}
export default Other;
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
})