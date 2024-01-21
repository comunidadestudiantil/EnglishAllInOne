import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SectionHeader } from '../../../components/header';
import { data } from './dataPhase/index';
import { hp, wp } from '../../../utils/responsive';
import { AntDesign, Fontisto, MaterialCommunityIcons } from '../../../utils/icons';


function RememberList({data}){
  return(
    <>
       {data.map((list, index)=>
         <Text key={index} style={styles.text}>{list}</Text>
        )}
    </>
  )
}

export function RenderAllPhaseView(props) {
    const { navigation, route } = props;
    const [showOption, setShowOption] = useState([])


   function open({index}){
     setShowOption([index])
   } 
    return (
        <View style={styles.container}>
            <SectionHeader navigation={navigation} title={route.params?.title} />
            <ScrollView>
                {data[route.params?.title].map((list, index) => {
                    return (
                        <View key={index} style={styles.cardContainer}>
                            <View style={styles.cardHeader}>

                               {showOption.includes(index)? (
                                    <>
                                        <TouchableOpacity style={styles.cardHeaderBtn}>
                                            <MaterialCommunityIcons name="snail" size={wp('7%')} color={'#414e6e'} />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.cardHeaderBtn}>
                                            <AntDesign name="caretleft" size={wp('7%')} color={'#414e6e'} />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.cardHeaderBtn}>
                                            <AntDesign name="play" size={wp('7%')} color={'#414e6e'} />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.cardHeaderBtn}>
                                            <AntDesign name="caretright" size={wp('7%')} color={'#414e6e'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.cardHeaderBtn} onPress={() => setShowOption([])}>
                                            <AntDesign name="closecircle" size={wp('7%')} color={'#414e6e'} />
                                        </TouchableOpacity>
                                    </>
                                ):(
                                 <TouchableOpacity
                                    style={styles.topicContainerbtn}
                                    onPress={()=> open({index})}
                                   >
                                    <Fontisto name="volume-down" size={wp('6%')} color={'#293042'} />
                                  </TouchableOpacity>
                                )}

                            </View>
                            
                            <RememberList data={list}/>
                            <Text style={styles.textIndex}>{index + 1}</Text> 

                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        backgroundColor: '#e2ebf7',
        paddingBottom: wp('2%')
    },
    cardContainer: {
        width: wp('100%'),
        padding: wp('2%'),
        paddingHorizontal: wp('4%'),
        borderTopColor: '#000',
        borderTopWidth: wp('0.2%')
    },
    cardHeader: {
        position: 'relative',
        top: wp('-2%'),
        left: wp('-4%'),
        width: wp('100%'),
        height: wp('13%'),
        backgroundColor: '#9cb6dd',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: wp('4%')
    },
    title: {
        color: '#000',
        textAlign: 'center',
        fontSize: wp('4.8%'),
        fontWeight: 'bold'
    },
    text: {
        color: '#000',
        fontSize: wp('4.5%'),
        fontWeight: '500', 
        paddingVertical:wp('1.5%')
    },
    textIndex: {
        color: '#000',
        textAlign: 'right',
        fontSize: wp('4%'),
        fontWeight: '900'
    }, 
    cardHeaderBtn:{
        marginHorizontal:wp('1.5%')
    }
})