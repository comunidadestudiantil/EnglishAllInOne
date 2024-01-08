
import {useEffect, useState, useContext} from 'react'; 
import {View, Pressable, Dimensions, StyleSheet, Keyboard, Text, TouchableOpacity} from 'react-native'
import { hp, wp } from '../utils/responsive';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from '../utils/linearGradient';
//import {StateManagement} from '../utils/global';



export  function TabBar ({ state, descriptors, navigation}) {
    const {colors}= useTheme()
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const showKeybord = descriptors[state.routes[state.index].key].options.tabBarHideOnKeyboard
    //const {isOnQuiz, setIsOnQuiz, isOnTheme, setIsOnTheme} = useContext(StateManagement)
   
    
    //console.log(state.routes[state.index].name)

    useEffect(() => {

      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {   
        setKeyboardStatus(true);
      });

      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardStatus(false);
      });
  
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
      
    }, []);

 //state.index===3 && {display:'none'}, keyboardStatus && {display:'none'} Esto es para ocurtar el Bottom Top
    return (

      <LinearGradient colors={['#414e6e', '#839dd1']} 
        style={[styles.mainContainer]}>
        {state.routes.map((route , index) => {
         const label = descriptors[route.key].options.tabBarLabel
         const isFocused = state.index === index;  
         const iconColor= isFocused?'#fff':colors.Icons
         //
       
         const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
        
          return (
            <View key = {index} style={[styles.mainItemContainer]}>
                <TouchableOpacity style={[styles.tapBtn, isFocused && {backgroundColor:'#262c40'}]} onPress={()=> onPress()}>
                    {descriptors[route.key].options.tabBarIcon('#fff')}
                    <Text style={[styles.tapBtnText,{color:'#fff'}]}>{label}</Text>
                </TouchableOpacity>    
            </View>
          );
        })}
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      position:'relative',
      left:0,
      bottom: hp('0%'),
      width:wp('100%'),
      height: wp('15%'),
      //borderTopLeftRadius:wp('5%'),
      //borderTopRightRadius:wp('5%'),
      flexDirection: 'row', 
      paddingHorizontal:wp('2%'),
      borderTopWidth:wp('0.5%'),
      borderTopColor:'#000',
       
     
    },
    mainItemContainer: {
      flex:1,
      borderColor: "#333B42",
     // backgroundColor:'red',
      alignItems:'center',
      marginHorizontal:wp('1%')

    },

    tapBtn:{
       width:wp('25%'),
       justifyContent:'center',
       alignItems:'center',
       marginTop:wp('0.5%'),
       borderRadius:wp('2%'),
       //paddingTop:wp('0.5%')
       paddingVertical:wp('0.5%')
    },
    tapBtnText:{
        fontSize:wp('3%'),
        fontWeight:'bold'
    }
  })
  