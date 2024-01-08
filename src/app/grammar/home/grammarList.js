
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {LinearGradient} from '../../../utils/linearGradient';
import { wp, hp } from '../../../utils/responsive';
import {SectionHeader} from '../../../components/header';
import {bookIcon} from '../../../image';


export function GrammarList(props){

    const {navigation} = props; 
    const data = [ 
         {title:'Singular and plural nouns', navigation:'singularAndPluralNouns'}, 
         {title:'The indefinite article (a/an)', navigation:'singularAndPluralNouns'},
         {title:'The article “the”', navigation:'singularAndPluralNouns'},
         {title:'Present simple', navigation:'presentSimple'},
         {title:'Preposition', navigation:'singularAndPluralNouns'},
         {title:'Prepositions of place (in, at, on)', navigation:'singularAndPluralNouns'},
         {title:'Prepositions of time (in, at, on)', navigation:'singularAndPluralNouns'},
         {title:'Present continuous', navigation:'singularAndPluralNouns'}, 
         {title:'Past simple', navigation:'singularAndPluralNouns'},
         {title:'Past continuous', navigation:'singularAndPluralNouns'},
         {title:'Past continuous vs simple past', navigation:'singularAndPluralNouns'},
         {title:'Future simple', navigation:'singularAndPluralNouns'},
         {title:'Future continuous', navigation:'singularAndPluralNouns'},
         {title:'Pasts of speech', navigation:'singularAndPluralNouns'},
         {title:'Adjective', navigation:'singularAndPluralNouns'},
         {title:'Superlative adjectives', navigation:'singularAndPluralNouns'},
         {title:'Usage of Do-Make', navigation:'singularAndPluralNouns'}, 
         {title:'Adverb', navigation:'singularAndPluralNouns'}, 
         {title:'Pronoun', navigation:'singularAndPluralNouns'}, 
         {title:'Possessive adjectives', navigation:'singularAndPluralNouns'}, 
         {title:'Possessive pronouns', navigation:'singularAndPluralNouns'}, 
         {title:'Reflexive pronouns', navigation:'singularAndPluralNouns'}, 
         {title:'Modal auxiliaries', navigation:'singularAndPluralNouns'}, 
         {title:'Present perfect', navigation:'singularAndPluralNouns'}, 
         {title:'Past perfect', navigation:'singularAndPluralNouns'}, 
         {title:'Future perfect', navigation:'singularAndPluralNouns'}, 
      
      ]
//singularAndPluralNouns
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