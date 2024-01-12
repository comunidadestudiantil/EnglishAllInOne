import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {modalAuxiliariesData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function ModalAuxiliaries(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Modal Auxiliaries'} navigation={navigation}/>
            <TopicContainer data={modalAuxiliariesData}/>
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