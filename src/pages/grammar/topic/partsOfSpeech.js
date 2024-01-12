
import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {partsOfSpeechData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PartsOfSpeech(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Parts of speech'} navigation={navigation}/>
            <TopicContainer data={partsOfSpeechData}/>
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




