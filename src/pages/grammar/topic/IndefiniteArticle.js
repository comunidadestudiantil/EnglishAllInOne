import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {indefiniteArticleData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function IdefiniteArticle(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'The indefinite article (a/an)'} navigation={navigation}/>
            <TopicContainer data={indefiniteArticleData}/>
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