import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {presentContinuousData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function PresentContinuous(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Present Continuous – Form'} navigation={navigation}/>
            <TopicContainer data={presentContinuousData}/>
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