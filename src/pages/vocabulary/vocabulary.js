import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../utils/responsive';
import {SectionHeader} from '../../components/header';
import {MaterialIcons, FontAwesome5} from '../../utils/icons'; 


export function Vocabulary(props) {
  const {navigation} = props;
   
  //adjectivesVocabulary
  return (
    <View style={styles.container}>
      <SectionHeader navigation={navigation} title={'Vocabulary'} />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        
        <TouchableOpacity 
          style={styles.card}
          onPress={()=> navigation.navigate('nounsVocabulary')}
        >
          <MaterialIcons  style={styles.cardContainerIcon}  name={'book'} size={wp('15%')} color={'#293042'} />  
          <Text style={styles.cardText}>1524 Nouns</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={()=> navigation.navigate('verbVocabulary')}
          style={styles.card}>
          <FontAwesome5  style={styles.cardContainerIcon}  name={'running'} size={wp('15%')} color={'#293042'} />  
          <Text style={styles.cardText}>100 Verbs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={()=> navigation.navigate('adjectivesVocabulary')}
          style={styles.card}
         >
          <MaterialIcons  style={styles.cardContainerIcon}  name={'invert-colors-on'} size={wp('15%')} color={'#293042'} />    
          <Text style={styles.cardText}>500 Adjectives</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
           onPress={()=> navigation.navigate('vocabularyListView', {title:'Adverbs', start:0, end:250})}
           style={styles.card} >
          <MaterialIcons  style={styles.cardContainerIcon}  name={'book'} size={wp('15%')} color={'#293042'} />  
          <Text style={styles.cardText}>250 Adverbs</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card}
          onPress={()=> navigation.navigate('vocabularyListView', {title:'Pronouns', start:0, end:62})}
         >
          <MaterialIcons  style={styles.cardContainerIcon}  name={'person'} size={wp('15%')} color={'#293042'} />  
          <Text style={styles.cardText}>60 Pronouns</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
           style={styles.card}
           onPress={()=> navigation.navigate('vocabularyListView', {title:'Prepositions', start:0, end:52})}
        >
          <FontAwesome5  style={styles.cardContainerIcon}  name={'book-open'} size={wp('15%')} color={'#293042'} />
          <Text style={styles.cardText}>50 Prepositions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e6ecf3',
  },
  cardContainer:{
    width:wp('100%'),
    flexWrap:'wrap',
    flexDirection:'row',
    //backgroundColor:'blue',
    flexGrow:2,
    justifyContent:'space-evenly'
  },
  card: {
    width: wp('44%'),
    height: wp('40%'),
    backgroundColor:'#b3c8dd',
    marginVertical:wp('1%'), 
    borderRadius:wp('3%'), 
    justifyContent:'center',
    alignItems:'center', 
    marginTop:wp('2%')
  },
  cardText: {
    color: '#293042',
    fontSize:wp('4.3%'), 
    fontWeight:'600'
  },
  cardContainerIcon:{
    marginBottom:wp('2%')

  }
});
