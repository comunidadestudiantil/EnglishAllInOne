import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {reflexivePronounsData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function ReflexivePronouns(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Reflexive Pronouns'} navigation={navigation}/>
            <TopicContainer data={reflexivePronounsData}/>
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