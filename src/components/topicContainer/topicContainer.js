import {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../utils/responsive';
import {BoldStyle} from '../../utils/textBold';
import {Ionicons} from '../../utils/icons'; 
import {Audio} from './audio'; 
import {Table} from './table'; 



export function TopicContainer({data, nameOfAudio}) {

  const [showOption, setShowOption] = useState([]); 
  const [audioToBePlay, setaudioToBePlay] = useState([]); 
  const [listOfPlaying, setListOfPlaying] = useState([])

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((list, index) =>{
       
          return(
            <View key={index} style={styles.topicContainer}>
            <Audio 
              nameOfAudio={`${nameOfAudio}${index+1}`} 
              index={index}
              showOption={showOption}
              setShowOption={setShowOption}
              audioToBePlay={audioToBePlay}
              setaudioToBePlay={setaudioToBePlay}
              listOfPlaying={listOfPlaying}
              setListOfPlaying={setListOfPlaying}
            />
             {list.title && <Text selectable style={styles.topicContainerTitle}>{list.title}</Text>}
             {list.description && <Text selectable style={styles.topicContainerText}><BoldStyle>{list.description}</BoldStyle></Text>}
             {list.table && <Table data={list.table}/>}
           
            <Text style={styles.topicContainerTextIndex}>{index+1}</Text>
          </View>
          )
        } 
        
        )}
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({

    body:{
        flex:1,
       // backgroundColor:'#fff'
        backgroundColor:'#f2f6fc'
    }, 
    scrollContainer:{
    
        paddingBottom:wp('20%')
      }, 
    bodyCard:{
      width:wp('96%'),
      //height:wp('30%'), 
      backgroundColor:'#e2ebf7',  
      marginHorizontal:wp('2%'), 
      marginVertical:wp('1%'), 
     // borderRadius:wp('3%'),
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
       // backgroundColor:'#e2ebf7', 
        //margin:wp('2%'), 
        padding:wp('2%'), 
        //borderRadius:wp('3%'),
       // elevation:6
       //paddingTop:wp('13%'),
       borderTopColor:'#000',
       borderTopWidth:wp('0.2%')
    }, 
    topicContainerTitle:{
      fontSize:wp('5%'), 
     // textAlign:'center', 
      fontWeight:'bold', 
      color:'#000'
    }, 
    topicContainerText:{
      fontSize:wp('4.5%'),
      color:'#000'
    },
    topicbtnContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end'
    },
    topicContainerbtn:{
      marginHorizontal:wp('2%')
     
    }, 
    topicContainerTextIndex:{
      //backgroundColor:'red', 
      color:'#000', 
      fontSize:wp('4.5%'), 
      fontWeight:'700',
      textAlign:'right',
      marginTop:wp('5%')
    }
})