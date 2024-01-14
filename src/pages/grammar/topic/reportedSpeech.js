import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {reportedSpeechData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function ReportedSpeech(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Reported Speech'} navigation={navigation}/>
            <TopicContainer data={reportedSpeechData}/>
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




