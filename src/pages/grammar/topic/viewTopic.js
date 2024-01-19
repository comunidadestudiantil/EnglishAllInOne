
import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {data} from '../data/data';
import {hp, wp} from '../../../utils/responsive'


export function ViewTopic(props){
 
    const {navigation, route} = props;
   
    console.log(route?.params?.title.replaceAll(' ', ''))
    return(
        <View style={styles.container}>
            <SectionHeader title={route?.params?.title} navigation={navigation}/>
            <TopicContainer data={data[route?.params?.title]} nameOfAudio={route?.params?.title.replaceAll(' ', '')}/>
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