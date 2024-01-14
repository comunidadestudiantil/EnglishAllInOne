import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../../utils/responsive';
import {SectionHeader} from '../../../components/header';

export function PhraseView(props){

    const {navigation} = props; 

    const data =[
        {title:'Usual Expressions', navigation:''},
        {title:'Home', navigation:''},
        {title:'School, University, Education', navigation:''},
        {title:'Hotel, Resort, Restaurant', navigation:''},
        {title:'Hospital, Pharmacy, Clinic', navigation:''},
        {title:'Business, Work, Office, Bank', navigation:''},
        {title:'Church', navigation:''},
        {title:'NightClub, Bar, Party', navigation:''},
        {title:'Supermarket, Store, Barber Shop, Beauty Saloon', navigation:''},
        {title:'Love', navigation:''},
  
    ]

    return(
        <View style={styles.container}>
            <SectionHeader navigation={navigation} title={'Phrases Index'}/>
            <ScrollView contentContainerStyle={styles.scroll}>
                {data.map((list, index)=> <TouchableOpacity key={index} style={styles.cardContainer}>
                    <Text style={styles.cardContainerText}>{list.title}</Text>
                </TouchableOpacity>)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#dbeefe', 
     alignItems:'center'
    },
    scroll:{
     width:wp('100%'), 
     alignItems:'center'
    },
    cardContainer:{
      width:wp('92%'), 
      height:wp('18%'),
      backgroundColor:'#414e6e', 
      marginVertical:wp('1%'), 
      borderRadius:wp('2%'), 
      justifyContent:'center', 
      alignItems:'center'
    }, 
    cardContainerText:{
        fontSize:wp('4.5%'),
        textAlign:'center', 
        fontWeight:'bold', 
        color:'#fff'
    }

})