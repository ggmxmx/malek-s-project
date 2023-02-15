import React, { useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View ,Image} from 'react-native';

const Card = props => {

  const [amount,setamount] = useState(0);

  amountHandler = () =>{
    if(amount<1){
        setamount(0)
    }else{
        setamount(amount-1)
    }
}

amountHandler2 = () =>{
    setamount(amount +1)
}


  return (
    
      <View>
                <Pressable onPress={amountHandler2}>
                    <Text style = {styles.amountStyle}>+</Text>
                </Pressable>

                <Text style = {styles.amountStyle}>{'amount: '+amount}</Text>

                <Pressable onPress={amountHandler}>
                    <Text style = {styles.amountStyle}>-</Text>
                </Pressable>
      </View>
   
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    height: 140,
    borderWidth: 5,
    borderColor:'rgb(159,0,205)',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor:'rgb(100,190,255)',
    marginTop:10
    
  },
  Text:{
    fontSize:20,
    color:'black',
    marginHorizontal:5
    
  },
  amountStyle:{
   alignSelf:'center',
   fontSize:20,
  },
  priceStyle:{
    alignSelf:'center',
    fontSize:20,
    marginTop:-10,
    color:'rgba(0,0,0,0.8)'
   },

});

export default Card;
