import * as React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native';
import {Vocabulary, NounsVocabulary, VocabularyListView, 
        VerbVocabulary, AdjectivesVocabulary
       } from '../pages/vocabulary';

const Stack = createStackNavigator();


export function VocabularyStack() {

  const config = {
      animation: 'timing',
      config: {
          duration: 180,
          easing: Easing.linear
      }
  };

  const CloseConfing = {
      animation: 'timing',
      config: {
          duration: 200,
          easing: Easing.linear
      }
  }


  return (
    
      <Stack.Navigator
         screenOptions={{
        gestureEnabled: false,
        headerMode:'nope',
         gestureDirection: 'horizontal',
         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { opacity: 1, backgroundColor: 'red', },
        transitionSpec: {
            open: config,
            close: CloseConfing
        }
       }}
        animation='slide'
      
      >

        <Stack.Screen 
          name="vocabulary" 
          component={Vocabulary} 
          options={{headerShown: false}}
        />
       
       <Stack.Screen 
          name="nounsVocabulary" 
          component={NounsVocabulary} 
          options={{headerShown: false}}
        />
      <Stack.Screen 
          name="vocabularyListView" 
          component={VocabularyListView} 
          options={{headerShown: false}}
        />

      <Stack.Screen 
          name="verbVocabulary" 
          component={VerbVocabulary} 
          options={{headerShown: false}}
       />

      <Stack.Screen 
          name="adjectivesVocabulary" 
          component={AdjectivesVocabulary} 
          options={{headerShown: false}}
       />
        
      </Stack.Navigator>
   
  )
}

