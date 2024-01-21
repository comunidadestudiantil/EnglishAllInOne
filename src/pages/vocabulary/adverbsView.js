import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SectionHeader} from '../../components/header'; 
import {hp, wp} from '../../utils/responsive';
import {MaterialIcons,} from '../../utils/icons'; 


export function AdverbsView(props){

    const {navigation} = props; 

    const sections =[
        {title:'Adverbs'},
        {title:'Adverbs (2)'},
        {title:'Adverbs (3)'},
        {title:'Adverbs (4)'}, 
        {title:'Adverbs (5)'}, 
    ]

    
    return (
        <View style={styles.container}> 
            <SectionHeader navigation={navigation} title={'Adverbs'}/>
            <ScrollView contentContainerStyle={styles.scroll}>
                {sections.map((list, index)=>
                   <TouchableOpacity key={index} 
                      onPress={()=> navigation.navigate('vocabularyListView', list)}
                      style={styles.card} >
                        <MaterialIcons  style={styles.cardContainerIcon}  name={'book'} size={wp('15%')} color={'#293042'} />    
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