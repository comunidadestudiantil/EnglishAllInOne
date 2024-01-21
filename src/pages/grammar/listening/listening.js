import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'; 
import {SectionHeader} from '../../../components/header'; 
import {hp, wp} from '../../../utils/responsive'; 
import {houseIcon, vacationIcon, soldIcon, halloweenIcon} from '../../../image/'; 




export function Listening(props){
   
    const {navigation} = props; 

    const data =[
      {
          "title": "My house",
          "icon": houseIcon
      },
      {
          "title": "Summer vacation",
          "icon": vacationIcon
      },
      {
          "title": "Remembrance day",
          "icon": soldIcon
      },
      {
          "title": "Halloween night",
          "icon": halloweenIcon
      },
      {
          "title": "Thanksgiving",
          "icon": houseIcon
      },
      {
          "title": "Learning how to drive",
          "icon": houseIcon
      },
      {
          "title": "Housework",
          "icon": houseIcon
      },
      {
          "title": "Working outside",
          "icon": houseIcon
      },
      {
          "title": "Daily schedule",
          "icon": houseIcon
      },
      {
          "title": "Meals",
          "icon": houseIcon
      },
      {
          "title": "Seasons",
          "icon": houseIcon
      },
      {
          "title": "Weather",
          "icon": houseIcon
      },
      {
          "title": "House",
          "icon": houseIcon
      },
      {
          "title": "School",
          "icon": houseIcon
      },
      {
          "title": "Subjects",
          "icon": houseIcon
      },
      {
          "title": "International student",
          "icon": houseIcon
      },
      {
          "title": "Interests and hobbies",
          "icon": houseIcon
      },
      {
          "title": "Movies",
          "icon": houseIcon
      },
      {
          "title": "Flowers",
          "icon": houseIcon
      },
      {
          "title": "Shopping mall",
          "icon": houseIcon
      },
      {
          "title": "Travel",
          "icon": houseIcon
      },
      {
          "title": "Transportation",
          "icon": houseIcon
      },
      {
          "title": "Holidays",
          "icon": houseIcon
      },
      {
          "title": "Diseases",
          "icon": houseIcon
      },
      {
          "title": "Jobs",
          "icon": houseIcon
      },
      {
          "title": "My body",
          "icon": houseIcon
      },
      {
          "title": "Clothing",
          "icon": houseIcon
      },
      {
          "title": "Months",
          "icon": houseIcon
      },
      {
          "title": "Days of the week\\t",
          "icon": houseIcon
      },
      {
          "title": "Describing things",
          "icon": houseIcon
      },
      {
          "title": "Bugs",
          "icon": houseIcon
      },
      {
          "title": "The kitchen",
          "icon": houseIcon
      },
      {
          "title": "Pets",
          "icon": houseIcon
      },
      {
          "title": "Grocery store",
          "icon": houseIcon
      },
      {
          "title": "Differences",
          "icon": houseIcon
      },
      {
          "title": "Restaurant",
          "icon":houseIcon
      },
      {
          "title": "Traffic",
          "icon": houseIcon
      },
      {
          "title": "Music",
          "icon": houseIcon
      },
      {
          "title": "Who what where and why?",
          "icon": houseIcon
      },
      {
          "title": "Which direction",
          "icon": houseIcon
      },
      {
          "title": "The office",
          "icon": houseIcon
      },
      {
          "title": "Money",
          "icon": houseIcon
      },
      {
          "title": "Me",
          "icon": houseIcon
      },
      {
          "title": "My classroom",
          "icon": houseIcon
      },
      {
          "title": "Vacation",
          "icon": houseIcon
      },
      {
          "title": "My family",
          "icon": houseIcon
      },
      {
          "title": "Summer",
          "icon": houseIcon
      },
      {
          "title": "The doctor",
          "icon": houseIcon
      },
      {
          "title": "Emotions",
          "icon": houseIcon
      },
      {
          "title": "My first job",
          "icon": houseIcon
      },
      {
          "title": "The lie",
          "icon": houseIcon
      },
      {
          "title": "Hobbies",
          "icon": houseIcon
      },
      {
          "title": "My first day of school",
          "icon": houseIcon
      },
      {
          "title": "Transportation",
          "icon": houseIcon
      },
      {
          "title": "Televison",
          "icon": houseIcon
      },
      {
          "title": "My country",
          "icon": houseIcon
      }
  ]


  return(
        <View style={styles.container}>
            <SectionHeader title={'Listening'} navigation={navigation}/>
            <ScrollView contentContainerStyle={styles.scroll}>
             {data.map((list, index)=>
                <TouchableOpacity 
                   key={index} 
                   style={styles.card} 
                   onPress={()=> navigation.navigate('listeningView',{title:list.title, icon:list.icon})}
                 >
                   <Image source={list.icon} style={styles.icon}/>
                   <Text style={styles.cardText}>{list.title}</Text>
                </TouchableOpacity>
               )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#f2f7fb',
       
    }, 
    scroll:{
      flexDirection:'row', 
      flexWrap:'wrap', 
      justifyContent:'space-between', 
      gap:wp('1%'), 
      paddingHorizontal:wp('3%'), 
      paddingTop:wp('2%'), 
      paddingBottom:wp('4%')
    }, 
    card:{
      width:wp('45%'),
      height:wp('40%'),
      backgroundColor:'#b9cfe8', 
      borderRadius:wp('3%'),
      justifyContent:'center', 
      alignItems:'center'
       
    }, 
    cardText:{
        color:'#000',
        fontWeight:'bold', 
        fontSize:wp('4.5%'), 
        paddingHorizontal:wp('2%'), 
        textAlign:'center'
    }, 
    icon:{
      width:wp('15%'), 
      height:wp('15%'), 
      tintColor:'#262c40'
    }
})