import React, { useContext, useState  } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import ResturantContext from '../../store/resturantContext';

const Card = props => {
  const amountSaver = amount
  const { image, price, name } = props;
 
 const {cart , setCart} =  useContext(ResturantContext)

 const [amount, setamount] = useState(0);

 const orderIndex = cart?.findIndex(order => order.name === name );  

 const removeOrderFromCart = () => {
      
 }

  amountHandler = () => {
    if (amount < 1) {
      setamount(0)
      removeOrderFromCart();
      return ;
    } else { 
      setamount(amount - 1)
    }

   
    var cartCopy = cart ; 

    const order = {
      name , 
      price , 
      image , 
      finallPrice:price * amount , 
    }

    if(orderIndex == -1 ) {
      cartCopy.push(order);
    }else {
      cartCopy[orderIndex] = order ; 
    }

    setCart([...cartCopy])

  } 

  amountHandler2 = () => {
    setamount(amount + 1)
  }
  const finallPrice = () =>{
    return (
      <Text style = {styles.Text}>{price * amount}</Text>
    )
}



  return (

    <View style={styles.cardContainer} >
      <View style={styles.productContainer}>
        <Image source={image} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.amountStyle}>{name}</Text>
          <Text style={styles.amountStyle}>{"price: " + price}</Text>
        </View>
      </View>
      <Pressable onPress={amountHandler2}>
        <Text style={styles.amountStyle}>+</Text>
      </Pressable>

      <Text style={styles.amountStyle}>{'amount: ' + amount}</Text>

      <Pressable onPress={amountHandler}>
        <Text style={styles.amountStyle}>-</Text>
        <Text style = {styles.amountStyle}>{"Finall price: " + price*amount}</Text>
      </Pressable>
    </View>

  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "80%", 
    // height: 140,
    borderWidth: 5,
    borderColor: 'rgb(159,0,205)',
    alignSelf: 'center',
    marginBottom: 10,

    borderRadius:15,
        marginTop: 10

  },
  Text: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 5

  },
  amountStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white'
  },
  priceStyle: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: -10,
    color: 'rgba(0,0,0,0.8)'
  },
  imageStyle: {
    width:90 , 
    height:90 ,
    marginTop:15 , 
    marginLeft:15 ,
    borderRadius:15 
  },
  productContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  textContainer:{
    paddingTop:30 , 
    paddingLeft:30 ,
  }

});

export default Card;
