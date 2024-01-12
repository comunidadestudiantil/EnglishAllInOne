import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationDrawer} from './src/navigation/drawerNavigation';
import 'react-native-gesture-handler';


export default function App() {
  
    return (
      <NavigationContainer>
          <NavigationDrawer />
      </NavigationContainer>
    );

}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },

});

