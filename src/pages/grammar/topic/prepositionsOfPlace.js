import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {prepositionsOfPlaceData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PrepositionsOfPlace(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Prepositions of place'} navigation={navigation}/>
            <TopicContainer data={prepositionsOfPlaceData}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        position:'relative',
        height:hp('100%'), 
        width:wp('100%')
    },
})