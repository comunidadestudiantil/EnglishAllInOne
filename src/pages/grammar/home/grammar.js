import {LinearGradient} from '../../../utils/linearGradient';
import {hp, wp} from '../../../utils/responsive';
import {HomeHeader} from '../../../components/header';
import {bookIcon, favoriteIcon, phraseIcon, practiceIcon, audioLibro} from '../../../image';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';




//playSound
export function Grammar(props){
 
    const {navigation} = props; 
     // 
    return(
        <LinearGradient style={styles.container} colors={['#414e6e', '#9cb6dd']}>
            <StatusBar backgroundColor={'#556ba0'}/>
            <HomeHeader navigation={navigation} />
            
            <View style={styles.first_secction}></View>

            <View style={styles.body}>
                <TouchableOpacity 
                    style={styles.secction} 
                    onPress={()=> navigation.navigate('grammarList')} >
                    <Image style={styles.secctionIcon} source={bookIcon}/>
                    <Text style={styles.secctionText}>Grammar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.secctionTwo}
                    onPress={()=> navigation.navigate('exerciseView')} >
                    <Image style={styles.secctionIcon} source={practiceIcon}/>
                    <Text style={styles.secctionText}>Exercise</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.secction}
                    onPress={()=> navigation.navigate('listening')} >
                    <Image style={styles.secctionIcon} source={audioLibro}/>
                    <Text style={styles.secctionText}>Listening</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                   style={styles.secctionTwo}
                   onPress={()=> navigation.navigate('phraseView')} >
                   <Image style={styles.secctionIcon} source={phraseIcon}/>
                   <Text style={styles.secctionText}>Phrase</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#000'
    }, 
    container:{
        width:wp('100%'), 
        height:hp('100%')

    }, 
    body:{
        width:wp('100%'), 
        height:hp('70%'),
      //  backgroundColor:'red', 
        flexDirection:'row',
        flexWrap:'wrap', 
        gap:wp('3%'), 
        justifyContent:'center', 
        paddingTop:wp('5%')
        
    }, 

    first_secction:{
       backgroundColor:'#e7f0f8', 
       width:wp('88%'),
       height:wp('35%'),
       alignSelf:'center', 
       marginTop:wp('5%'), 
       borderRadius:wp('3%'), 
  
    }, 
    secction:{
        width:wp('42%'), 
        height:wp('42%'), 
        backgroundColor:'#e7f0f8', 
        borderRadius:wp('10%'), 
        justifyContent:'center', 
        alignItems:'center', 
        borderTopLeftRadius:wp('1%'), 
        borderBottomRightRadius:wp('1%')
    }, 

    secctionTwo:{
        width:wp('42%'), 
        height:wp('42%'), 
        backgroundColor:'#e7f0f8', 
        borderRadius:wp('10%'), 
        justifyContent:'center', 
        alignItems:'center',
        borderTopRightRadius:wp('1%'), 
        borderBottomLeftRadius:wp('1%') 
     
    }, 
    secctionText:{
        
        color:'#262c40', 
        fontSize:wp('4.5%'), 
        fontWeight:'bold', 
        textAlign:'center'

    }, 
    secctionIcon:{
        width:wp('15%'), 
        height:wp('15%'), 
        tintColor:'#414e6e', 
       
    }
})