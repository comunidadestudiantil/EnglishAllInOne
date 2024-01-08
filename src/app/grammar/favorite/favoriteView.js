import {View, Text, StyleSheet} from 'react-native';


export function FavoriteView(){
    return(
        <View>
            <Text style={styles.text}>FavoriteView</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#000'
    }
})