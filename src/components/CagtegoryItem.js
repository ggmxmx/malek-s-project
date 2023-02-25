import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ScreensName from '../../route/ScreensName';


const CategoryItem = (props) => {
    const { image, title } = props;
    const navgation = useNavigation() ; 
    const onItemPress = () => {
        navgation.navigate(ScreensName.Meals , {catrgory: title})
    }


    return (
        <View style={styles.orderboared}>
            <Pressable onPress={onItemPress}>
                <View style={styles.imagesorderboard}>

                    {!!image ? <Image style={styles.imagesStyle} source={image} /> : null}
                    
                    <Text
                     style={[styles.Text , !image && styles.buyStyle]}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    imagesorderboard: {
        flex: 1 , 
        flexDirection:'row'
    },
    imagesorderboard2: {
        flex: 1,
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
    Text: {
        alignSelf: 'center',
        textAlign:'center',
        fontSize: 30,
        // marginTop: -65,
        marginBottom: 30,
        color: 'white',
        marginLeft: 50 , 
        // width:"100%"
    },
    imagesStyle: {
        width: 90,
        height: 90,
        marginLeft: 4,
        marginTop: 4,
        borderRadius: 10
    },
    buyStyle:{
        marginLeft: 0 , 
        width:"100%" , 
        textAlign:'center'
    }


})

export default CategoryItem; 
