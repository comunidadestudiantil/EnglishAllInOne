
import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {pastContinuousSimplePastData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PastContinuousSimplePast(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Past Continuous + Simple Past'} navigation={navigation}/>
            <TopicContainer data={pastContinuousSimplePastData}/>
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




