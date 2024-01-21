import {useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {vocabularyData} from './vocabularyData/data';
import {SectionHeader} from '../../components/header';
import {hp, wp} from '../../utils/responsive';
import {AntDesign} from '../../utils/icons'; 
import {Loading} from '../../components/alert'; 
import {CardHeader} from './cardHeader'; 



function RenderList({data}){
  
   return(
    <View style={styles.card3}>
       {data.map((list, index)=><Text key={index} style={styles.card3Text}>{list}</Text>)}
    </View>
   )
}

export function VocabularyListView(props) {
  const {navigation, route: {params},} = props;
  const {end, start, title} = params;
  const [data, setData]= useState(vocabularyData[title]); 
  const [showLoading, setShowLoanding] = useState(false);
  const [showIcon, setShowIcon] = useState([]);
  
  useLayoutEffect(()=>{

    /*setShowLoanding(true);

    setTimeout(()=>{
      setData(); 
      setShowLoanding(false);
    },0)*/

  },[])
  

  return (
    <View style={styles.container}>
      <SectionHeader navigation={navigation} title={title} />
      <ScrollView contentContainerStyle={styles.scroll}>
        {data.map((list, index) => {
          
          return (
            <View key={index} style={[styles.card]} >
             
              <CardHeader  
                visible={true} 
                index={index}
                setShowIcon={setShowIcon}
                showIcon={showIcon}  
              />
              <View style={[styles.card2]}>
                 <RenderList data={list}/>
              </View>
             
              {/* <Text style={[styles.cardText, {marginRight:wp('3%')}, index %10 ===0 && {marginTop:wp('2%')}]}>{second}</Text>*/}
            </View>
          );
        })}
      </ScrollView>
      <Loading  
         visible={showLoading} 
         setVisible={setShowLoanding}
        
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
  },
  scroll: {
    width:wp('100%'),
    paddingBottom:wp('5%'), 
   
  },

  card: {
    flex:1,
    backgroundColor: '#f2f7fb',
    //margin:wp('1%'), 
  //  backgroundColor:'red', 
 
    //paddingTop:wp('2%'),
    

  },
  card2:{
    width:wp('100$'),
    flexDirection:'row', 
    flexWrap:'wrap',

  },
  cardHeader:{
    position:'relative',
    top:wp('-13%'),
    width:wp('100%'),
    height:wp('13%'),
    backgroundColor:'#b9cfe8', 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'flex-end', 
  
   }, 
   cardHeaderBtn:{
     marginHorizontal:wp('2%')
   },
  cardText:{
    color:'#000', 
    fontSize:wp('4.5%'), 
    fontWeight:'500', 
    textAlign:'left',
    paddingVertical:wp('1%'), 
    paddingHorizontal:wp('2%'),
    margin:wp('2%'),
   // borderBottomColor:'#9cb6dd',
    //borderBottomWidth:wp('0.5%'),
    //borderStyle:'dotted'
    borderWidth:wp('0.1%'), 
  
  },
  cardIndexText:{
    position:'absolute',
    left:wp('2%'),
    textAlign:'left', 
    color:'#000', 
    fontSize:wp('4%'), 
    
  },
  card3:{
     width:wp('100%'),
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between', 
    paddingHorizontal:wp('2%'), 
    marginVertical:wp('1%')
  
    
  }, 
  card3Text:{
    width:wp('48%'), 
    backgroundColor:'#d3e3f2', 
    borderWidth:wp('0.2%'), 
    padding:wp('2%'), 
    fontSize:wp('4.5%'), 
    color:'#000'
  }
});
