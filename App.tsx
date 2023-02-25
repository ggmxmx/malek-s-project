/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
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
import ResturantContext from './store/resturantContext';
import ResturantProvider from './store/resturantProvider';



const App = () => {

  return (
    <View style={styles.container}>
      <ResturantProvider>
        <ResturantContext.Consumer>
          {context => {
            return (
              <MainNavigation />
            )
          }}
        </ResturantContext.Consumer>
      </ResturantProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  }
});

export default App;
