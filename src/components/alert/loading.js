import {View, Text, Modal, StyleSheet, ActivityIndicator} from 'react-native'; 
import {hp, wp} from '../../utils/responsive'; 



export function Loading({visible, setVisible, transparent=true}){

    return(
        <Modal visible={visible} transparent={true} onRequestClose={()=> setVisible(false)}>
           <View style={[styles.container, !transparent &&{backgroundColor:'#f2f9f9'}]}>
              <View style={styles.card}>
                <ActivityIndicator size={'large'} color={'#000'}/>
                <Text style={styles.cardText}>Loading...</Text>
              </View>
           </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'rgba(0,0,0,0.5)', 
        justifyContent:'center', 
        alignItems:'center'
    }, 
    card:{
        width:wp('85%'), 
        height:wp('18%'), 
        backgroundColor:'#fff', 
        borderRadius:wp('3%'), 
        flexDirection:'row', 
        alignItems:'center', 
        paddingHorizontal:wp('4%')
    }, 
    cardText:{
        color:'#000', 
        marginHorizontal:wp('5%'), 
        fontSize:wp('4.5%'), 
        fontWeight:'bold'
    }
})