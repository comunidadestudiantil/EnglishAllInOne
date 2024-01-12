
import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {futureSimpleData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function FutureSimple (props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Future Simple – Form'} navigation={navigation}/>
            <TopicContainer data={futureSimpleData}/>
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




