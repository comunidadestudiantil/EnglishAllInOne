import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native'; 
import {hp, wp} from '../../utils/responsive';
import {BoldStyle} from '../../utils/textBold'; 




export function Table({data, numberOfColunm}){

 
    return(
        <View style={styles.container}>
            
             {data[0].first  && data.map((list, index)=>{
                const fistItem = index==0;  
                const lasttItem = index === data.length-1; 

                return (
                 <View key={index} style={styles.card}>
                    <Text style={[styles.cardText, fistItem && styles.cardTextFirstItemT2, fistItem && styles.border, lasttItem && styles.boderBottom]}>
                        <BoldStyle>{list.first}</BoldStyle>
                    </Text>
                    <Text style={[styles.cardText, fistItem && styles.cardTextFirstItemT2, fistItem && styles.border2, lasttItem && styles.boderBottom2]}>
                        <BoldStyle>{list.second}</BoldStyle>
                    </Text>
                  </View>
                )
             })} 
           
    
            {data[0].third && data.map((list, index)=>{
                 const fistItem = index==0 
                 const lasttItem = index === data.length-1; 
                return(
                    <View key={index} style={styles.card}>
                    <Text style={[[styles.cardText, fistItem && styles.cardTextFirstItemT1, lasttItem && styles.boderBottom, lasttItem && styles.boderBottom2  ]]}>
                       <BoldStyle>{list.third}</BoldStyle> 
                    </Text> 
                   </View>
                 )
            })}
       
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       // backgroundColor:'blue', 
    }, 

    card:{
        flex:1,
        //backgroundColor:'blue', 
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',       
    }, 
    cardText:{
      flex:1,
      borderWidth:wp('0.2%'),
      //borderRightWidth:wp('1%'),
      textAlign:'left', 
      color:'#000', 
      fontSize:wp('4.5%'),
      paddingHorizontal:wp('1%'), 
      paddingVertical:wp('0.7%'),
      backgroundColor:'#e7f0f8',

    },
    cardTextFirstItemT1:{
        fontWeight:'bold', 
        textAlign:'center', 
        marginTop:wp('3%'), 
        borderTopWidth:wp('0.41%'),
        borderTopLeftRadius:wp('2%'), 
        borderTopRightRadius:wp('2%'),
    },
    cardTextFirstItemT2:{
        fontWeight:'bold', 
        textAlign:'center',
        borderTopWidth:wp('0.41%'), 
       
      
    }, 
    border:{
        borderTopLeftRadius:wp('2%'), 
    }, 
    border2:{
        borderTopRightRadius:wp('2%')
    }, 
    boderBottom:{
      borderBottomLeftRadius:wp('2%')
    }, 
    boderBottom2:{
      borderBottomRightRadius:wp('2%')
    }
   
})