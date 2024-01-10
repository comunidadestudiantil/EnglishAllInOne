import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {presentSimpleData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PresentSimple(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Present Simple'} navigation={navigation}/>
            <TopicContainer data={presentSimpleData}/>
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