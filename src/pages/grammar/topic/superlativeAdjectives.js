
import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {superlativeAdjectivesData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function SuperlativeAdjectives(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Superlative Adjectives'} navigation={navigation}/>
            <TopicContainer data={superlativeAdjectivesData}/>
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




