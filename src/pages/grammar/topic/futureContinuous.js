
import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {futureContinuousData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function FutureContinuous(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Future Continuous – Form'} navigation={navigation}/>
            <TopicContainer data={futureContinuousData}/>
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




