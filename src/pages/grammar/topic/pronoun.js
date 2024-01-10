import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {pronounData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function Pronoun(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Pronoun'} navigation={navigation}/>
            <TopicContainer data={pronounData}/>
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