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

const Page2 = (props) => {
  const [background, setbackground] = useState(images.homeBackground);
  const [thxView, setThxView] = useState(false);

  const thx = () => {
    setThxView(true);
  }
  const thx2 = () => {
    setThxView(false);
  }



  const CategoryArr = [
    {
      title: "Burgers",
      image: images.burger(),
    },
    {
      title: "Shnitzel",
      image: images.friedChicken(),
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
      title: "Others",
      image: images.potato(),
    },
    {
      title: "Steak",
      image: images.burger(),
    },
    {
      title: "Buy",
    },
  ]

  const renderCategories = () => {
    return CategoryArr.map((category) =>
      <CategoryItem
        image={category.image}
        title={category.title}
      />)
  }


  if (thxView) {
    return (
      <ImageBackground source={background} style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 30, color: 'white' }}>{'Thanks to baught from us'}</Text>
          <Text style={{ fontSize: 30, color: 'white' }}>{'Back againe'}</Text>
          <Pressable onPress={thx2}>
            <View style={{ borderWidth: 1, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.3)', alignSelf: 'center', height: 50, width: 150, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 60 }}>
              <Text style={{ fontSize: 30 }}>Back</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    )
  }



  return (

    <View style={styles.appContainer}>
      <ImageBackground source={background} style={{ flex: 1 }}>
        <ScrollView>
          {renderCategories()}
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
    marginTop: -65,
    marginBottom: 30,
    color: 'white',
    marginLeft: 50
  },

  goalsContainer: {
    flex: 5,
  },


});

export default Page2