import {View, Text, StyleSheet} from 'react-native';


export function PhraseView(){
    return(
        <View>
            <Text style={styles.text}>PhraseView</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#000'
    }
})