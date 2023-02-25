import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Card from '../components/Amount'
import images from '../assets/images'
import ScreensName from '../../route/ScreensName'
import { NavigationAction } from 'react-navigation'
// import { ScrollView } from 'react-navigation'
import axios from 'axios'
import CategoryItem from '../components/CagtegoryItem'
import thx from "../res/mokData/meals"

const Page2 = (props) => {
  const [background, setbackground] = useState(images.homeBackground);
  const BuyPg = () => {
    props.navigation.navigate(ScreensName.Buy)
  }
  

  



  const CategoryArr = [
    {
      title: "Burgers",
      image: images.burger(),
    },
    {
      title: "Fried Chicken",
      image: images.friedChicken(),
    },
    {
      title: "Pizza",
      image: images.pizza(),
    },
    {
      title: "Other",
      image: images.potato(),
    },
  ]

  const renderCategories = () => {
    return CategoryArr.map((category) =>
      <CategoryItem
        image={category.image}
        title={category.title}
      />)
  }


  



  return (

    <View style={styles.appContainer}>
      <ImageBackground source={background} style={{ flex: 1 }}>
        <ScrollView>
          {renderCategories()}
          <Pressable onPress={BuyPg}>
          <View style = {styles.orderboared}>
          <Text style = {styles.Text}>{'Buy'}</Text>
          </View>
          </Pressable>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,

  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  imagesStyle: {
    width: 90,
    height: 90,
    marginLeft: 4,
    marginTop: 4,
    borderRadius: 10


  },
  imagesorderboard: {
    flex: 1

  },
  imagesorderboard2: {
    flex: 1
  },
  orderboared: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 1,
    marginHorizontal: 10,
    borderColor: 'rgba(255,255,255,0.7)',
    marginBottom: 15,
    backgroundColor: 'rgba(100,100,100,0.3)'
  },


  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  Text: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    
  },

  goalsContainer: {
    flex: 5,
  },


});

export default Page2