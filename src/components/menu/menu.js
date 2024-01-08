import {View, Text, StyleSheet} from 'react-native'; 
import { wp, hp } from '../../utils/responsive';
import {LinearGradient} from '../../utils/linearGradient';


export function Menu(){
    return(

        <LinearGradient colors={['#414e6e', '#b9cfe8']} style={styles.container}>
            <Text>Menu</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        height:hp('100%'), 
        width:wp('60%'),
        backgroundColor:'red', 
        borderBottomRightRadius:wp('4%'), 
        borderTopRightRadius:wp('4%')
    }
})