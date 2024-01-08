
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../utils/responsive';
import {LinearGradient} from '../../utils/linearGradient';
import {Ionicons} from '../../utils/icons'; 

export function HomeHeader({navigation}){
   
  
    return(
        <LinearGradient colors={['#4a5989', '#9cb6dd']} style={styles.container}>
            <TouchableOpacity 
              style={styles.icon} 
              onPress={()=> navigation.openDrawer()}
             >
                <Ionicons name="menu" size={wp('9%')} color={'#fff'} />
            </TouchableOpacity>
            <Text style={styles.text}>English All In One</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('13%'),
        backgroundColor:'#fff', 
        borderBottomRightRadius:wp('5%'), 
        borderBottomLeftRadius:wp('5%'), 
        borderEndWidth:wp('0.5%'), 
        borderStartWidth:wp('0.5%'), 
        borderBottomWidth:wp('0.5%'), 
        borderBottomColor:'#000', 
        elevation:10, 
       // alignItems:'center', 
        flexDirection:'row', 
        paddingTop:wp('6%')
        //justifyContent:'center'   
    }, 
    text:{
        width:wp('100%'),
        fontSize:wp('4.9%'), 
        fontWeight:'bold',
        textAlign:'center', 
       // backgroundColor:'red'
    }, 

    icon:{
        zIndex:1,
        position:'absolute',
        top:wp('4.5%'),
        left:wp('2%'), 
       // backgroundColor:'red'
    }
})