import * as React from 'react';
//import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native';
import { Grammar, GrammarList, ExerciseView, FavoriteView, PhraseView } from '../pages/grammar/dist';
import { 
      PresentSimple, SingularAndPluralNouns, IdefiniteArticle, 
      ArticleThe, Pronoun, Preposition, PrepositionsOfPlace, 
      PrepositionsOfTime, PresentContinuous, PastSimple,
      PastContinuous, PastContinuousSimplePast, FutureSimple, 
      BeGoingTo, FutureContinuous, PartsOfSpeech, Adjective, 
      SuperlativeAdjectives, UsageOfDoMake, Adverb, PossessiveAdjectives,
      PossessivePronouns, ReflexivePronouns, ModalAuxiliaries, 
      PresentPerfect, PastPerfect, FuturePerfect
      
    } from '../pages/grammar/topic';


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
        name="singularAndPluralNouns"
        component={SingularAndPluralNouns}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="presentSimple"
        component={PresentSimple}
        options={{ headerShown: false }}
      />

     <Stack.Screen
        name="idefiniteArticle"
        component={IdefiniteArticle}
        options={{ headerShown: false }}
      />

     <Stack.Screen
        name="articleThe"
        component={ArticleThe}
        options={{ headerShown: false }}
      />
    
    <Stack.Screen
        name="pronoun"
        component={Pronoun}
        options={{ headerShown: false }}
      />

    <Stack.Screen
        name="preposition"
        component={Preposition}
        options={{ headerShown: false }}
      />  

    <Stack.Screen
        name="prepositionsOfPlace"
        component={PrepositionsOfPlace}
        options={{ headerShown: false }}
      />  

     <Stack.Screen
        name="prepositionsOfTime"
        component={PrepositionsOfTime}
        options={{ headerShown: false }}
      />  
      
      <Stack.Screen
        name="presentContinuous"
        component={PresentContinuous}
        options={{ headerShown: false }}
      />  

      <Stack.Screen
        name="pastSimple"
        component={PastSimple}
        options={{ headerShown: false }}
      /> 

     <Stack.Screen
        name="pastContinuous"
        component={PastContinuous}
        options={{ headerShown: false }}
      /> 

     <Stack.Screen
        name="pastContinuousSimplePast"
        component={PastContinuousSimplePast}
        options={{ headerShown: false }}
      /> 

    <Stack.Screen
        name="futureSimple"
        component={FutureSimple}
        options={{ headerShown: false }}
      /> 
    <Stack.Screen
        name="beGoingTo"
        component={BeGoingTo}
        options={{ headerShown: false }}
      />  

    <Stack.Screen
        name="futureContinuous"
        component={FutureContinuous}
        options={{ headerShown: false }}
      />  
    
    <Stack.Screen
        name="partsOfSpeech"
        component={PartsOfSpeech}
        options={{ headerShown: false }}
      />   
    
     <Stack.Screen
        name="adjective"
        component={Adjective}
        options={{ headerShown: false }}
      />   
     <Stack.Screen
        name="superlativeAdjectives"
        component={SuperlativeAdjectives}
        options={{ headerShown: false }}
      />   
     
     <Stack.Screen
        name="usageOfDoMake"
        component={UsageOfDoMake}
        options={{ headerShown: false }}
      />  
     <Stack.Screen
        name="adverb"
        component={Adverb}
        options={{ headerShown: false }}
      />  
      <Stack.Screen
        name="possessiveAdjectives"
        component={PossessiveAdjectives}
        options={{ headerShown: false }}
      />  
      <Stack.Screen
        name="possessivePronouns"
        component={PossessivePronouns}
        options={{ headerShown: false }}
      />  
      <Stack.Screen
        name="reflexivePronouns"
        component={ReflexivePronouns}
        options={{ headerShown: false }}
      /> 

      <Stack.Screen
        name="modalAuxiliaries"
        component={ModalAuxiliaries}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="presentPerfect"
        component={PresentPerfect}
        options={{ headerShown: false }}
      /> 
        <Stack.Screen
        name="pastPerfect"
        component={PastPerfect}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
          name="futurePerfect"
          component={FuturePerfect}
          options={{ headerShown: false }}
        /> 

    </Stack.Navigator>

  )
}

