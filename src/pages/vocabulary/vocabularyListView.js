import {useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {vocabularyData} from './vocabularyData/data';
import {SectionHeader} from '../../components/header';
import {hp, wp} from '../../utils/responsive';
import {AntDesign} from '../../utils/icons'; 
import {Loading} from '../../components/alert'; 
import {CardHeader} from './cardHeader'; 

export function VocabularyListView(props) {
  const {navigation, route: {params},} = props;
  const {end, start, title} = params;
  const [data, setData]= useState([]); 
  const [showLoading, setShowLoanding] = useState(false);
  const [showIcon, setShowIcon] = useState([]);
  
  useLayoutEffect(()=>{

    setShowLoanding(true);

    setTimeout(()=>{
      setData(vocabularyData[title].slice(start, end)); 
      setShowLoanding(false);
    },0)

  },[])
  

  return (
    <View style={styles.container}>
      <SectionHeader navigation={navigation} title={title} />
      <ScrollView contentContainerStyle={styles.scroll}>
        {data.map((list, index) => {
           
          return (
            <View key={index} style={[styles.card, index %10 ===0 && styles.card2]} >
             
              <CardHeader  
                visible={index %10 ===0} 
                index={index}
                setShowIcon={setShowIcon}
                showIcon={showIcon}  
              />
              <Text style={[styles.cardText, {marginLeft:wp('3%')},  index %10 ===0 && {marginTop:wp('2%'),}]}>{list.first}</Text>
              <Text style={[styles.cardText, {marginRight:wp('3%')}, index %10 ===0 && {marginTop:wp('2%')}]}>{list.second}</Text>
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
    paddingBottom:wp('5%')
  },

  card: {
    backgroundColor: '#f2f7fb',
    //paddingTop:wp('2%'),
    flexDirection:'row', 

  },
  card2:{
    marginTop:wp('15%'), 

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
    flex:1,
    color:'#000', 
    fontSize:wp('4.5%'), 
    fontWeight:'500', 
    textAlign:'left',
    paddingVertical:wp('1%'), 
    paddingHorizontal:wp('2%'),
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
 
});
