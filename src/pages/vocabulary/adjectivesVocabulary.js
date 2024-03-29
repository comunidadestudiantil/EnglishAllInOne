import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SectionHeader} from '../../components/header'; 
import {hp, wp} from '../../utils/responsive';
import {MaterialIcons,} from '../../utils/icons'; 


export function AdjectivesVocabulary(props){

    const {navigation} = props; 

    const sections =[
        {title:'Adjectives'},
        {title:'Adjectives (2)'},
        {title:'Adjectives (3)'},
        {title:'Adjectives (4)'}, 
        {title:'Adjectives (5)'}, 
        {title:'Adjectives (6)'}, 
        {title:'Adjectives (7)'},
        {title:'Adjectives (8)'},
        {title:'Adjectives (9)'}, 
        {title:'Adjectives (10)'}, 
        {title:'Adjectives (11)'}, 
    ]

    
    return (
        <View style={styles.container}> 
            <SectionHeader navigation={navigation} title={'Adjectives'}/>
            <ScrollView contentContainerStyle={styles.scroll}>
                {sections.map((list, index)=>
                   <TouchableOpacity key={index} 
                      onPress={()=> navigation.navigate('vocabularyListView', list)}
                      style={styles.card} >
                        <MaterialIcons  style={styles.cardContainerIcon}  name={'invert-colors-on'} size={wp('15%')} color={'#293042'} />    
                      <Text style={styles.cardText}>{list.title}</Text>
                   </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    )
} 


const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#f2f7fb'
    }, 
    scroll:{
      flexDirection:'row', 
      flexWrap:'wrap', 
      justifyContent:'space-between',
      marginHorizontal:wp('3%')
    }, 
    card:{
        height:wp('45%'), 
        width:wp('45%'), 
        backgroundColor:'#b9cfe8', 
        marginTop:wp('2%'), 
        borderRadius:wp('3%'), 
        justifyContent:'center', 
        alignItems:'center'
    }, 
    cardText:{
        color:'#293042', 
        fontSize:wp('4.5%'), 
        fontWeight:'600'
    }
})