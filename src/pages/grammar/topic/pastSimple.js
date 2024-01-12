import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {pastSimpleData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PastSimple(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Past Simple – Form'} navigation={navigation}/>
            <TopicContainer data={pastSimpleData}/>
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