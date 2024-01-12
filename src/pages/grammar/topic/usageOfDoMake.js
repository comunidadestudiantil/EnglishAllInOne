import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {usageOfDoMakeData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function UsageOfDoMake(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Usage of Do-Make'} navigation={navigation}/>
            <TopicContainer data={usageOfDoMakeData}/>
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




