import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../../utils/responsive';
import {SectionHeader} from '../../../components/header';
import {Ionicons, FontAwesome5} from '../../../utils/icons';



export function PhraseView(props){

    const {navigation} = props; 

    const data =[
        {title:'Usual Expressions', navigation:'renderAllPhaseView', icon:'book-open'},
        {title:'Home', navigation:'', icon:'home'},
        {title:'School, University, Education', navigation:'', icon:'school'},
        {title:'Hotel, Resort, Restaurant', navigation:'', icon:'hotel'},
        {title:'Hospital, Pharmacy, Clinic', navigation:'', icon:'hospital'},
        {title:'Business, Work, Office, Bank', navigation:'', icon:'business-time'},
        {title:'Church', navigation:'', icon:'house-user'},
        {title:'NightClub, Bar, Party', navigation:'', icon:'music'},
        {title:'Supermarket, Store, Barber Shop', navigation:'', icon:'shopping-cart'},
        {title:'Love', navigation:'', icon:'grin-hearts'},
  
     ]

    return(
        <View style={styles.container}>
            <SectionHeader navigation={navigation} title={'Phrases'}/>
            <ScrollView contentContainerStyle={styles.scroll}>
             { data.map((list, index)=> 
                <TouchableOpacity key={index} 
                  style={styles.cardContainer} 
                  onPress={()=> navigation.navigate('renderAllPhaseView',{title:list.title})} >
                    <FontAwesome5  style={styles.cardContainerIcon}  name={list.icon} size={wp('9%')} color={'#000'} />
                   <Text style={styles.cardContainerText}>{list.title}</Text>
                </TouchableOpacity>
                
             )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#e6ecf3', 
     backgroundColor:'#fff',
     alignItems:'center'
    },
    scroll:{
     width:wp('100%'), 
     flexDirection:'row', 
     flexWrap:'wrap', 
     justifyContent:'space-between'
    },
    cardContainer:{
      width:wp('45.5%'), 
      minHeight:wp('45%'),
      backgroundColor:'#b9cfe8', 
      marginVertical:wp('1.5%'), 
      borderRadius:wp('2%'), 
      justifyContent:'center', 
      alignItems:'center', 
      paddingVertical:wp('2%'), 
      paddingHorizontal:wp('2%'),
      marginHorizontal:wp('2%')
  
    }, 
    cardContainerIcon:{
     width:wp('45.5%'), 
     height:wp('20%'),
     textAlign:'center',
     textAlignVertical:'bottom',
     marginBottom:wp('2%')
    // backgroundColor:'red'
    },
    cardContainerText:{
        fontSize:wp('4.5%'),
        height:wp('20%'),
        textAlign:'center', 
        fontWeight:'500', 
        color:'#000'
    }

})