import * as React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Easing } from 'react-native';
import {Note} from '../pages';

const Stack = createNativeStackNavigator();


export function NoteStack() {

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
        // gestureDirection: 'horizontal',
        //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { opacity: 1, backgroundColor: 'red', },
       /* transitionSpec: {
            open: config,
            close: CloseConfing
        }*/
       }}
       // animation='slide'
      
      >

        <Stack.Screen 
          name="note" 
          component={Note} 
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
   
  )
}

