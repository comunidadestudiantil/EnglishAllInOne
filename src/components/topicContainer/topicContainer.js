import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/responsive';
import {BoldStyle} from '../../utils/textBold';


export function TopicContainer({data}) {


  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/*  <View style={styles.bodyCard}>
          <Text style={styles.bodyCardTitle}>Singular and plural nouns.</Text>
          <Text style={styles.bodyCardText}>
            A noun names a person, place, thing, or idea.
          </Text>
        </View> */}
        {data.map((list, index) => (
          <View key={index} style={styles.topicContainer}>
            <Text style={styles.topicContainerTitle}>{list.title}</Text>
            <Text style={styles.topicContainerText}><BoldStyle>{list.description}</BoldStyle></Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({

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