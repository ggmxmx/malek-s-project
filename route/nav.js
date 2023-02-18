import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../src/screens/Home";
import Page2 from "../src/screens/Page2";
import Burgers from "../src/screens/Burgers";
import FriedCicken from "../src/screens/FriedChicken";
import ScreensName from "./ScreensName";
import Pizza from "../src/screens/Pizza";
import Other from "../src/screens/Other";
import Meals from "../src/screens/Meals";



const MainNavigation = () => {

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ScreensName.home} component={Home} />
                <Stack.Screen name={ScreensName.page2} component={Page2}/>
                <Stack.Screen name={ScreensName.Burgers} component={Burgers}/>
                <Stack.Screen name={ScreensName.FriedCicken} component = {FriedCicken}/>
                <Stack.Screen name={ScreensName.Pizza}component = {Pizza}/>
                <Stack.Screen name={ScreensName.other}component = {Other}/>
                <Stack.Screen name={ScreensName.Meals}component = {Meals}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default MainNavigation ; 