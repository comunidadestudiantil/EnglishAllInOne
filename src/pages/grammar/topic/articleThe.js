import {View, Text, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {articleTheData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function ArticleThe(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'The article “the”'} navigation={navigation}/>
            <TopicContainer data={articleTheData}/>
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