import {useState, useEffect,} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SectionHeader} from '../../components/header';
import {hp, wp} from '../../utils/responsive';
import {verbData} from './vocabularyData/verbData';
import {AntDesign} from '../../utils/icons'; 
import {Loading} from '../../components/alert'; 
import {CardHeader} from './cardHeader'; 

//Verb
export function VerbVocabulary(props) {
  const {navigation} = props;
  const [data, setData] = useState(verbData)
  const [showLoading, setShowLoanding] = useState(false);
  const [showIcon, setShowIcon] = useState([]);


  return (
    <View style={styles.container}>
      <SectionHeader navigation={navigation} title={'Verbs'} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.cardTitle}>
          <Text style={[styles.cardTitleText, {fontWeight: 'bold'}]}>(To)</Text>
          <Text style={[styles.cardTitleText, {fontWeight: 'bold'}]}>Past</Text>
          <Text style={[styles.cardTitleText, {fontWeight: 'bold'}]}>
            Participle
          </Text>
        </View>
        {
          data.map((list, index) => (
            <View  key={index}>
              <CardHeader
               visible={index %10 ===0}
               index={index}
               setShowIcon={setShowIcon}
               showIcon={showIcon} 
              />
               <View style={[styles.card]}>
              
              <Text selectable style={[styles.cardText,  index %10 ===0 &&{marginTop:wp('2%')}]}>{list.present}</Text>
              <Text selectable style={[styles.cardText,  index %10 ===0 &&{marginTop:wp('2%')}]}>{list.past}</Text>
              <Text selectable style={[styles.cardText,  index %10 ===0  &&{marginTop:wp('2%')}]}>{list.participle}</Text>
            </View>
            </View>
          ))}
      </ScrollView>

      <Loading visible={showLoading} setVisible={setShowLoanding}/>
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
    // backgroundColor:'red',
    flexDirection: 'row',
   // paddingHorizontal: wp('1%'),
  },
  cardTitle:{
    flexDirection: 'row',
    paddingHorizontal: wp('1%'),
   // marginBottom:wp('2%')
  },
  cardTitleText:{
    color: '#000',
    flex: 1,
    fontSize: wp('4%'),
    paddingHorizontal: wp('1%'),
  },
  cardText: {
    color: '#000',
    flex: 1,
    fontSize: wp('4%'),
    //borderBottomWidth: wp('0.3%'),
   // borderBottomColor: '#000',
    borderStyle:'solid', 
    borderWidth:wp('0.2%'), 
    paddingLeft:wp('1%')
  },

});
