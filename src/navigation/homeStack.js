import * as React from 'react';
//import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native';
import { Grammar, GrammarList, ExerciseView, FavoriteView, PhraseView, RenderAllPhaseView, Listening, ListeningView} from '../pages/grammar/dist';
import { ViewTopic} from '../pages/grammar/topic';



const Stack = createStackNavigator();


export function HomeStack() {

  const config = {
    animation: 'timing',
    config: {
      duration: 200,
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
        headerShown:false,
        gestureEnabled: false,
        headerMode: 'nope',
         gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { opacity: 1, backgroundColor: '#fff', },
         transitionSpec: {
             open: config,
             close: CloseConfing
           }
         }}
       // animation='slide' 

      >

      <Stack.Screen
        name="home"
        component={Grammar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="grammarList"
        component={GrammarList}
       // options={{ headerShown: true }}
      />
      <Stack.Screen
        name="exerciseView"
        component={ExerciseView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favoriteView"
        component={FavoriteView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="phraseView"
        component={PhraseView}
        options={{ headerShown: false }}
      />

      
      <Stack.Screen
          name="renderAllPhaseView"
          component={RenderAllPhaseView}
          options={{ headerShown: false }}
        /> 

       <Stack.Screen
          name="viewTopic"
          component={ViewTopic}
          options={{ headerShown: false }}
        /> 
      
      <Stack.Screen
          name="listening"
          component={Listening}
          options={{ headerShown: false }}
        /> 

      <Stack.Screen
          name="listeningView"
          component={ListeningView}
          options={{ headerShown: false }}
        /> 
  

    </Stack.Navigator>

  )
}

