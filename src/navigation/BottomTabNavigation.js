import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, TabBar, NoteStack, VocabularyStack, DictionaryStack } from './index';
import { FontAwesome, MaterialCommunityIcons, Foundation, Ionicons} from '../utils/icons';
import { wp, hp } from '../utils/responsive';



const Tab = createBottomTabNavigator();



export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      
      tabBar={props => <TabBar {...props} />} 

     >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Grammar',
          //tabBarIcon:<FontAwesome name="book" size={wp('7%')} color={'red'} />
          tabBarIcon: (color) => <FontAwesome name="book" size={wp('7%')} color={'#fff'} />
        }}

      />
      <Tab.Screen
        name="dictionaryStack"
        component={DictionaryStack}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarLabel:'Dictionary',
            //tabBarIcon:<FontAwesome name="book" size={wp('7%')} color={'red'} />
            tabBarIcon: (color) => <Ionicons name="book" size={wp('7%')} color={'#fff'} />
          }}
       />
      <Tab.Screen
        name="vocabularyStack"
        component={VocabularyStack}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Vocabulary',
          //tabBarIcon:<FontAwesome name="book" size={wp('7%')} color={'red'} />
          tabBarIcon: (color) => <MaterialCommunityIcons name="book" size={wp('7%')} color={'#fff'} />
        }}
      
      />

      <Tab.Screen
        name="noteStack"
        component={NoteStack}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarLabel: 'Note',
            //tabBarIcon:<FontAwesome name="book" size={wp('7%')} color={'red'} />
            tabBarIcon: (color) => <Foundation name="clipboard-notes" size={wp('7%')} color={'#fff'} />
          }}
       />

    </Tab.Navigator>
  );
}