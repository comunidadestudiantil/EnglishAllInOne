
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {LinearGradient} from '../../../utils/linearGradient';
import { wp, hp } from '../../../utils/responsive';
import {SectionHeader} from '../../../components/header';
import {bookIcon} from '../../../image';


export function GrammarList(props){
  
    const {navigation} = props; 
    const data = [ 
         {title:'Singular and plural nouns', navigation:'viewTopic'}, 
         {title:'The indefinite article (a/an)', navigation:'viewTopic'},
         {title:'The article “the”', navigation:'viewTopic'},
         {title:'Pronoun', navigation:'viewTopic'}, 
         {title:'Present simple', navigation:'viewTopic'},
         {title:'Preposition', navigation:'viewTopic'},
         {title:'Prepositions of place (in, at, on)', navigation:'viewTopic'},
         {title:'Prepositions of time (in, at, on)', navigation:'viewTopic'},
         {title:'Present continuous', navigation:'viewTopic'}, 
         {title:'Past simple', navigation:'viewTopic'},
         {title:'Past continuous', navigation:'viewTopic'},
         {title:'Past continuous vs simple past', navigation:'viewTopic'},
         {title:'Future simple', navigation:'viewTopic'}, 
         {title:'Be Going to', navigation:'viewTopic'},
         {title:'Future continuous', navigation:'viewTopic'},
         {title:'Pasts of speech', navigation:'viewTopic'},
         {title:'Adjective', navigation:'viewTopic'},
         {title:'Superlative adjectives', navigation:'viewTopic'},
         {title:'Usage of Do-Make', navigation:'viewTopic'}, 
         {title:'Adverb', navigation:'viewTopic'}, 
         {title:'Possessive adjectives', navigation:'viewTopic'}, 
         {title:'Possessive pronouns', navigation:'viewTopic'}, 
         {title:'Reflexive pronouns', navigation:'viewTopic'}, 
         {title:'Modal auxiliaries', navigation:'viewTopic'}, 
         {title:'Present perfect', navigation:'viewTopic'}, 
         {title:'Past perfect', navigation:'viewTopic'}, 
         {title:'Future perfect', navigation:'viewTopic'}, 
         {title:'Conditionals', navigation:'viewTopic'}, 
         {title:'Question Tang', navigation:'viewTopic'},
         {title:'Gerunds', navigation:'viewTopic'},
         {title:'Reported Speech', navigation:'viewTopic'},
         {title:'Active Or Passive Voice', navigation:'viewTopic'},

         //Active or passive voice
      ]

    return(
        <LinearGradient colors={['#9cb6dd', '#d3e2f2']} style={styles.container}>
            <SectionHeader  navigation={navigation} title={'Grammar Topic'}/>
            <View style={styles.body}>
               <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {data.map((list, index)=>
                     <TouchableOpacity key={index} 
                       style={styles.card} 
                       onPress={()=> navigation.navigate(list.navigation, {title:list.title})}>
                        <Image style={styles.cardIcon} source={bookIcon}/>
                        <Text style={styles.cardText}>{list.title}</Text>
                     </TouchableOpacity>
                    )}
               </ScrollView>
              
            </View>
          
        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    container:{
        position:'relative',
        height:hp('100%'), 
        width:wp('100%')
    },
    body:{
       flex:1, 
      // backgroundColor:'red'
    },
    scrollContainer:{
      flexWrap:'wrap',
      flexDirection:'row',
      gap:wp('4%'),
      justifyContent:'space-between',
      marginHorizontal:wp('2%'),
      marginVertical:wp('2%'),
      paddingBottom:wp('20%')
    }, 
    card:{
      width:wp('45.9%'), 
      height:wp('40%'),
      backgroundColor:'#fff',
      borderRadius:wp('3%'),
      justifyContent:'center',
      alignItems:'center', 
      paddingHorizontal:wp('1.5%')
    },
    cardIcon:{
      width:wp('15%'), 
      height:wp('15%'), 
      tintColor:'#334675'
    },
    cardText:{
        color:'#000',
        fontSize:wp('4.5%'),
        fontWeight:'bold', 
        textAlignVertical:'center', 
        textAlign:'center'
    } 
   
})