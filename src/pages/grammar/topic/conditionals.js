
import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {conditionalsData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function Conditionals(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Conditionals'} navigation={navigation}/>
            <TopicContainer data={conditionalsData}/>
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




