
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput ,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'


// import one from '../../src/images/city.jpeg'

import { Axios } from 'react-native-axios';
import Images from '../assets/images';
import ScreensName from '../../route/ScreensName';

const Home = (props) => {

  const [city, setCity] = useState('');
  const [bg, setbg] = useState(Images.cat());
  const [background,setbackground] = useState(Images.homeBackground);
  const [bgName, setbgName] = useState("cat");
  const getWeather = async () => {
    if (!city.trim()) return
    console.log("wait")

    try {
      

      console.log(res.data)
    } catch (error) {
      console.log("in error")
      console.log(error);
    }

  }

  // const city = require('../assets/images/city.jpeg') ; 

  const onTextPress = () => {
    props.navigation.navigate(ScreensName.page2);
  }

  return (
    <ImageBackground source={background} style={Styles.image}>
      <SafeAreaView style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
        <Text style = {Styles.Text}>{'Welcome'}</Text>
        <Pressable onPress = {onTextPress}>
        <View style={Styles.textInputContainer}>
          <Text style = {{fontSize:30}}>{'Menu'}</Text>
        </View>
        
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home

const Styles = StyleSheet.create({
  image: {
    flex: 1,
  },

  textInputContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    paddingHorizontal: 100,
    width: '80%',
    justifyContent: 'space-between',
    
  },

  textInput: {
    height: 40,
    //   width: '60%',
    fontWeight: '600',

  },
  Text:{
    color:'rgba(255,255,255,0.5)',
    fontSize:30,
    marginBottom:100,
    marginTop:-90,
  }
})