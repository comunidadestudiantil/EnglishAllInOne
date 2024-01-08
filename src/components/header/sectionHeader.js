import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import {LinearGradient} from '../../utils/linearGradient';
import {hp, wp} from '../../utils/responsive';
import {Ionicons} from '../../utils/icons';


export function SectionHeader({navigation, title}){

    return(
        <LinearGradient colors={['#414e6e', '#839dd1']} style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.goBack()}>
               <Ionicons name="arrow-back" size={wp('10%')} color={'#fff'} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </LinearGradient>
    )


}


const styles = StyleSheet.create({
    container:{
       zIndex:2,
       position:'relative', 
       width:wp('100%'), 
       height:hp('8%'),
       flexDirection:'row',
       alignItems:'center',
       borderBottomWidth:wp('0.6%'),
       borderBottomColor:'#000'
      // justifyContent:'center'

    }, 
    icon:{
       zIndex:1,
       position:'absolute',
       left:wp('4%'), 
      // height:hp('7%'),
       width:wp('15%'),
      // backgroundColor:'red'
    }, 
    text:{
        width:wp('100%'), 
        fontSize:wp('5.2%'), 
        fontWeight:'bold',
        textAlign:'center'
    }
})