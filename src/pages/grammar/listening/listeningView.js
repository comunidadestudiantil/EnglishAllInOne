import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import {SectionHeader} from '../../../components/header'; 
import {data} from './data'; 
import {hp, wp} from '../../../utils/responsive'; 


export function ListeningView(props){

    const {navigation, route:{params}} = props; 
    
    console.log(params.title)
   
   return (
        <View style={styles.container}>
            <SectionHeader navigation={navigation} title={params.title}/>
            <ScrollView contentContainerStyle={styles.scroll}>
               <View style={styles.card}>
                 <View  style={styles.iconContainer}>
                    <Image source={params.icon} style={styles.icon}/> 
                 </View>
                 <Text style={styles.cardText}>{data[params.title]}</Text>
               </View>
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
      marginHorizontal:wp('2%'), 
      paddingTop:wp('5%')
    }, 
    card:{
      paddingVertical:wp('2%'),
      backgroundColor:'#d3e3f2', 
      paddingHorizontal:wp('2%'), 
      borderRadius:wp('3%'), 
     // alignItems:'center'
    }, 
    cardText:{
        color:'#000', 
        fontSize:wp('4.8%')
    }, 
    iconContainer:{
      justifyContent:'center', 
      alignItems:'center'
    },
    icon:{
      width:wp('25%'), 
      height:wp('25%'), 
      tintColor:'#262c40', 
      marginVertical:wp('4%'), 
     
    }
})