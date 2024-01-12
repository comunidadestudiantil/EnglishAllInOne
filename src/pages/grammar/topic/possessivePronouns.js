
import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {possessivePronounsData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PossessivePronouns(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Possessive Pronouns'} navigation={navigation}/>
            <TopicContainer data={possessivePronounsData}/>
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