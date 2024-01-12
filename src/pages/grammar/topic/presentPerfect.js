import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {presentPerfectData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PresentPerfect(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Present perfect – form'} navigation={navigation}/>
            <TopicContainer data={presentPerfectData}/>
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