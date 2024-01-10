import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SectionHeader} from '../../../components/header';
import {wp, hp} from '../../../utils/responsive';


export function SingularAndPluralNouns(props){
    
    const {navigation}= props;
    const data =[ 
        {
         title:'Singular and Plural Nouns',
         description:'A noun names a person, place, thing, or idea.\n\n Usually, the first page of a grammar book tells you about nouns. Nouns give names of concrete or abstract things in our lives. As babies learn "mom," "dad," or "milk" as their first word, nouns should be the first topic when you study a foreign language.',
         table:[]
        },
        {
          title:'For the plural form of most nouns, add s.',
          description:'bottle – bottles\n\ncup – cups\n\npencil – pencils\n\ndesk – desks\n\nsticker – stickers\n\nwindow – windows ',
          table:[]
        }, 
        {
          title:'For nouns that end in ch, x, s, or s sounds, add es.',
          description:'box – boxes\n\nwatch – watches\n\nmoss – mosses\n\nbus – buses',
          table:[]
        },
        {
          title:'For nouns ending in f or fe, change f to v and add es.',
          description:'wolf – wolves\n\nwife – wives\n\nleaf – leaves\n\nlife – lives',
          table:[]
        },
        {
          title:'Some nouns have different plural forms.',
          description:'child – children\n\nwoman – women\n\nman – men\n\nmouse – mice\n\ngoose – geese ',
          table:[]
        },
        {
          title:'Nouns ending in vowels like y or o do not have definite rules.',
          description:'baby – babies\n\ntoy – toys\n\nkidney – kidneys\n\npotato – potatoes\n\nmemo – memos\n\nstereo – stereos',
          table:[]
        },
        {
            title:'A few nouns have the same singular and plural forms.',
            description:'sheep – sheep\n\ndeer – deer\n\nseries – series\n\nspecies – species',
            table:[]
        }
    ]

    
    return(
        <View style={styles.container}>
            <SectionHeader navigation={navigation} title={'Singular and plural nouns'}/>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.bodyCard}>
                        <Text style={styles.bodyCardTitle}>Singular and plural nouns.</Text>
                        <Text style={styles.bodyCardText}>A noun names a person, place, thing, or idea.</Text>
                    </View> 
                    {data.map((list, index)=>
                    <View key={index} style={styles.topicContainer}>
                        <Text style={styles.topicContainerTitle}>{list.title}</Text>
                        <Text style={styles.topicContainerText}>{list.description}</Text>
                    </View>)}
                </ScrollView>
                
            </View>
       
        </View>
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
        backgroundColor:'#8daeec'
       // backgroundColor:'#e2ebf7'
    }, 
    scrollContainer:{
    
        paddingBottom:wp('20%')
      }, 
    bodyCard:{
      width:wp('96%'),
      height:wp('30%'), 
      backgroundColor:'#e2ebf7',  
      marginHorizontal:wp('2%'), 
      marginVertical:wp('1%'), 
      borderRadius:wp('3%'),
      paddingHorizontal:wp('5%'), 
      elevation:6
    }, 
    bodyCardTitle:{
      fontSize:wp('5%'), 
      textAlign:'center', 
      marginVertical:wp('2%'), 
      fontWeight:'bold', 
      color:'#000', 
      textDecorationLine:'underline'
    },
    bodyCardText:{
        color:'#000', 
         fontSize:wp('4%'),
         fontWeight:'bold',
         textAlign:'center'
    },
    topicContainer:{
        backgroundColor:'#e2ebf7', 
        margin:wp('2%'), 
        padding:wp('4%'), 
        borderRadius:wp('3%'),
        elevation:6
    }, 
    topicContainerTitle:{
      fontSize:wp('5%'), 
      textAlign:'center', 
      fontWeight:'bold', 
      color:'#000'
    }, 
    topicContainerText:{
      fontSize:wp('4.5%'),
      color:'#000'
    }
})