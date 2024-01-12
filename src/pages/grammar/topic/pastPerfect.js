import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {pastPerfectData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PastPerfect(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Past Perfect – Form'} navigation={navigation}/>
            <TopicContainer data={pastPerfectData}/>
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