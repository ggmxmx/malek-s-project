import { View, Text, TextInput, StyleSheet, Button, Image,ScrollView ,Pressable, ImageBackground} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Card from '../components/Amount'
import images from '../assets/images'
import ScreensName from '../../route/ScreensName'
import { NavigationAction } from 'react-navigation'
// import { ScrollView } from 'react-navigation'
import axios from 'axios'

const Page2 = (props) => {
  const [background, setbackground] = useState(images.homeBackground)
const [enterGoalText, setEnterGoalText] = useState('')
const [burger,setburger] = useState(images.burger)

function goalInputHandler(enteredText) {
setEnterGoalText(enteredText);
};

function addGoalHandler() {
  console.log(enterGoalText);

    

};
const BurgersMenu = () => {
  props.navigation.navigate(ScreensName.Burgers);
}


  return (
    
    <View style={styles.appContainer}>
     <ScrollView>
    
      <View onPress = {goalInputHandler} style ={styles.orderboared}>
        <Pressable onPress = {BurgersMenu}>
         <View style = {styles.imagesorderboard}>
         <Image style = {styles.imagesStyle} source={burger}/>
         </View>
        <Text style = {styles.Text}>Burgers</Text>
        </Pressable>
      </View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

   appContainer:{
 flex: 1,
   
   },

   inputContainer:{
  flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
   },
   imagesStyle:{
    width:90,
    height:90,
    marginLeft:4,
    marginTop:4,
    borderRadius:10
    
    
   },
   imagesorderboard:{
    flex:1
    
   },
   imagesorderboard2:{
    flex:1
   },
   orderboared:{
    flex:1,
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
    marginHorizontal:10,
    borderColor:'rgba(0,0,0,0.3)'
   },
  
   textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
   },
   Text:{
    alignSelf:'center',
    fontSize:30,
    marginTop:-65,
    marginBottom:30,
    color:'black'
   },

   goalsContainer:{
   flex: 5,
   },
  
  
  });

export default Page2