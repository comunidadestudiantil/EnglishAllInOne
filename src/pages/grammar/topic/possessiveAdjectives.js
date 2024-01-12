//possessiveAdjectives

import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {possessiveAdjectivesData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PossessiveAdjectives(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Possessive Adjectives'} navigation={navigation} />
            <TopicContainer data={possessiveAdjectivesData} />
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




