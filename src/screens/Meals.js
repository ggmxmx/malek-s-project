import React from 'react'
import { ScrollView, View , ImageBackground , Text} from 'react-native'
import Images from '../assets/images';
import Card from '../components/Amount';
import MealesData from '../res/mokData/meals';

const Meals = (props) => {

    const { catrgory } = props.route.params || {};

    console.log('catrgory: ', catrgory);

    const renderMeals = () => {
        const data = MealesData[catrgory] || [] ;  
        console.log(data);
        return data.map(meal => {
          return  <Card 
                name={meal.name}
                price={meal.price}
                image={meal.image}
                /> 
        })
    }

   

    return (
        <ImageBackground source={Images.homeBackground()} style={{flex:1}}>
            <Text style={{color:'#ffff' , fontSize:30 , textAlign:'center'}} >{catrgory}</Text>
            <ScrollView style={{flex:1 }}>
                {renderMeals()}
            </ScrollView>
        </ImageBackground>
    ) 
}

export default Meals; 