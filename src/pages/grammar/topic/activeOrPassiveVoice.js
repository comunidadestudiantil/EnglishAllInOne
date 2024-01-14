import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {activeOrPassiveVoiceData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function ActiveOrPassiveVoice(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Active or passive voice'} navigation={navigation}/>
            <TopicContainer data={activeOrPassiveVoiceData}/>
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




