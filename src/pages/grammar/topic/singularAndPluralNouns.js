
import {View, StyleSheet} from 'react-native'; 
import {SectionHeader} from '../../../components/header';
import {TopicContainer} from '../../../components/topicContainer/topicContainer';
import {singularAndPluralNounsData} from '../../../components/data';
import {hp, wp} from '../../../utils/responsive'


export function SingularAndPluralNouns(props){
 
    const {navigation} = props;

    return(
        <View style={styles.container}>
            <SectionHeader title={'Singular and Plural Nouns'} navigation={navigation}/>
            <TopicContainer data={singularAndPluralNounsData} nameOfAudio={'singularAndPluralNouns'}/>
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




