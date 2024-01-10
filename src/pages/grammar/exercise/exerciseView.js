import {View, Text, StyleSheet} from 'react-native';


export function ExerciseView(){
    return(
        <View>
            <Text style={styles.text}>ExerciseView</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#000'
    }
})