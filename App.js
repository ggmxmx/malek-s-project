/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  enteredText,
  Switch,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,


} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './route/nav';
import Home from './src/screens/Home';
import Missions3 from './src/screens/Page2';




/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


export default function App() {


  return (

    <View style={styles.container}>
      <MainNavigation />
    </View>
  )




}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',

  }



});


