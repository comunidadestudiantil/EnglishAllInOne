
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {LinearGradient} from '../../../utils/linearGradient';
import { wp, hp } from '../../../utils/responsive';
import {SectionHeader} from '../../../components/header';
import {bookIcon} from '../../../image';


export function GrammarList(props){

    const {navigation} = props; 
    const data = [ 
         {title:'Singular and plural nouns', navigation:'singularAndPluralNouns'}, 
         {title:'The indefinite article (a/an)', navigation:'idefiniteArticle'},
         {title:'The article “the”', navigation:'articleThe'},
         {title:'Pronoun', navigation:'pronoun'}, 
         {title:'Present simple', navigation:'presentSimple'},
         {title:'Preposition', navigation:'preposition'},
         {title:'Prepositions of place (in, at, on)', navigation:'prepositionsOfPlace'},
         {title:'Prepositions of time (in, at, on)', navigation:'prepositionsOfTime'},
         {title:'Present continuous', navigation:'presentContinuous'}, 
         {title:'Past simple', navigation:'pastSimple'},
         {title:'Past continuous', navigation:'pastContinuous'},
         {title:'Past continuous vs simple past', navigation:'pastContinuousSimplePast'},
         {title:'Future simple', navigation:'futureSimple'}, 
         {title:'Be Going to', navigation:'beGoingTo'},
         {title:'Future continuous', navigation:'futureContinuous'},
         {title:'Pasts of speech', navigation:'partsOfSpeech'},
         {title:'Adjective', navigation:'adjective'},
         {title:'Superlative adjectives', navigation:'superlativeAdjectives'},
         {title:'Usage of Do-Make', navigation:'usageOfDoMake'}, 
         {title:'Adverb', navigation:'adverb'}, 
         {title:'Possessive adjectives', navigation:'possessiveAdjectives'}, 
         {title:'Possessive pronouns', navigation:'possessivePronouns'}, 
         {title:'Reflexive pronouns', navigation:'reflexivePronouns'}, 
         {title:'Modal auxiliaries', navigation:'modalAuxiliaries'}, 
         {title:'Present perfect', navigation:'presentPerfect'}, 
         {title:'Past perfect', navigation:'pastPerfect'}, 
         {title:'Future perfect', navigation:'futurePerfect'}, 
         {title:'Conditionals', navigation:'conditionals'}, 
         {title:'Question Tang', navigation:'questionTang'},
         {title:'Gerunds', navigation:'gerunds'},
         {title:'Reported Speech', navigation:'reportedSpeech'},
         {title:'Active Or Passive Voice', navigation:'activeOrPassiveVoice'},

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
                       onPress={()=> navigation.navigate(list.navigation)}>
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