import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'; 
import {SectionHeader} from '../../components/header';
import {hp, wp} from '../../utils/responsive'; 
import {MaterialIcons} from '../../utils/icons'; 
import {nounsData} from './vocabularyData/nousData'; 

export function NounsVocabulary(props){
   
    const {navigation} = props
    
    const sections =[
        {title:'Nouns'},
        {title:'Nouns (2)'},
        {title:'Nouns (3)'},
        {title:'Nouns (4)'},
        {title:'Nouns (5)'},
        {title:'Nouns (6)'},
        {title:'Nouns (7)'},
        {title:'Nouns (8)'},
        {title:'Nouns (9)'},
        {title:'Nouns (10)'},
        {title:'Nouns (11)'},
        {title:'Nouns (12)'},
        {title:'Nouns (13)'},
        {title:'Nouns (14)'},
        {title:'Nouns (15)'},
        {title:'Nouns (16)'},
        {title:'Nouns (17)'},
        {title:'Nouns (18)'},
        {title:'Nouns (19)'},
        {title:'Nouns (20)'},
        {title:'Nouns (21)'},
        {title:'Nouns (22)'},
        {title:'Nouns (23)'},
        {title:'Nouns (24)'},
        {title:'Nouns (25)'},
        {title:'Nouns (26)'},
        {title:'Nouns (27)'},
        {title:'Nouns (28)'},
        {title:'Nouns (29)'},
        {title:'Nouns (30)'},
        {title:'Nouns (31)'},
    ]

    return(
        <View style={styles.container}>
            <SectionHeader title={'Nouns'} navigation={navigation}/>
            <ScrollView contentContainerStyle={styles.scroll}>
              {sections.map((list, index)=>
               <TouchableOpacity key={index} 
                 onPress={()=> navigation.navigate('vocabularyListView', list)}
                  style={styles.cardContainer}>
                 <MaterialIcons  style={styles.cardContainerIcon}  name={'book'} size={wp('15%')} color={'#d3deea'} />  
                 <Text style={styles.cardContainerText}>{list.title}</Text>
               
               </TouchableOpacity>)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#f4f7fa', 
       
    }, 
    scroll:{
       flexDirection:'row', 
       flexWrap:'wrap', 
       justifyContent:'space-between', 
       marginHorizontal:wp('2%'), 
       paddingBottom:wp('3%')
    },
    cardContainer:{
       width:wp('46%'), 
       height:wp('40%'),
       backgroundColor:'#586c9d',
       marginTop:wp('2%'), 
       borderRadius:wp('3%'), 
       justifyContent:'center', 
       alignItems:'center'
    }, 
    cardContainerText:{
        fontSize:wp('4.5%'), 
        fontWeight:'700', 
        color:'#f4f7fa'
    }
})