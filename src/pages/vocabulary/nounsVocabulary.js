import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'; 
import {SectionHeader} from '../../components/header';
import {hp, wp} from '../../utils/responsive'; 
import {MaterialIcons} from '../../utils/icons'; 
import {nounsData} from './vocabularyData/nousData'; 

export function NounsVocabulary(props){
   
    const {navigation} = props
    
    const sections =[
        {title:'Nouns', start:0, end:99},
        {title:'Nouns', start:100, end:199},
        {title:'Nouns', start:200, end:299},
        {title:'Nouns', start:300, end:399},
        {title:'Nouns', start:400, end:499},
        {title:'Nouns', start:500, end:599},
        {title:'Nouns', start:600, end:699},
        {title:'Nouns', start:700, end:899},

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
                 <Text style={styles.cardContainerText}>{`${list.start*2}-${list.end*2}`}</Text>
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