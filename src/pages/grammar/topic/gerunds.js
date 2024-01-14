
import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {gerundsData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function Gerunds(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Gerunds'} navigation={navigation}/>
            <TopicContainer data={gerundsData}/>
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




