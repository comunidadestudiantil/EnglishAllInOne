import {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../utils/responsive';
import {BoldStyle} from '../../utils/textBold';
import {Ionicons} from '../../utils/icons'; 
import Sound  from 'react-native-sound'; 
import { exists, downloadFile, mkdir, DocumentDirectoryPath, readDir, unlink } from 'react-native-fs';


export function Audio({nameOfAudio}) {
    

  const [isReady, setIsready] = useState()
  const [url, setUrl] = useState(''); 


useEffect(()=>{

const playSound = new Sound(`${DocumentDirectoryPath}/${nameOfAudio}.mp3`, Sound.LIBRARY, (error) => {
  if (error) {
      console.log('failed to load the sound', error);
      return;
  }
  
  })

  setIsready(playSound)  
 
},[])


async function getAudio(){

  const check = await exists(`${DocumentDirectoryPath}/prueba.mp3`)
  //console.log(`${DocumentDirectoryPath}/prueba.mp3`, 'ok')
  if(check){
    const data = await readDir(`${DocumentDirectoryPath}`)
    //console.log('ok')
    console.log(data[0].path)  
    setUrl(data[0].path)
  }
}

        
  function handlePlaySound({name, action}){
       
   if(name ===0){
    if(action ==='play'){
      
      console.log(action)
      isReady.play(); 
      isReady.setSpeed(0.8)
    }

    if(action ==='stop'){
      
      isReady.stop(); 

    }
   } 

 }


 
async function getDiccionaryData() {

  try {

    const saveLocation = `${DocumentDirectoryPath}/singularAndPluralNouns2.mp3`; 
    const outputUnzip = `${DocumentDirectoryPath}`; 

  

    const res = await downloadFile({
        fromUrl:'https://www.dropbox.com/scl/fi/6onru084ogfmntlg3xsgv/ElevenLabs_2024-01-13T14_29_28_Serena.mp3?rlkey=syuo0a0y5o4qglwyje8sazm7d&dl=1',
        toFile:saveLocation,
        background:true,
        begin:(res )=>{
            
        },
        progress:(res)=>{
        const math = ((res.bytesWritten/res.contentLength)*100).toFixed(0); 
         console.log(math); 
        }

    }).promise
    .then(()=>{

       
    })
    .catch((error)=>{
     
       console.log(error.toString()); 


    })


 }catch (error) {

      console.log(error.toString()); 
  
  }


}

  return (
    
        <View style={styles.topicbtnContainer}>
             <TouchableOpacity style={styles.topicContainerbtn} onPress={()=>  getDiccionaryData()}>
                <Ionicons name="arrow-down-circle" size={wp('7%')} color={'#000'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.topicContainerbtn} onPress={()=>  handlePlaySound({name:0, action:'stop'})}>
                <Ionicons name="stop" size={wp('7%')} color={'#000'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.topicContainerbtn} onPress={()=> handlePlaySound({name:0, action:'play'})}>
                <Ionicons name="play-circle" size={wp('7%')} color={'#000'} />
              </TouchableOpacity>
       </View>

  );
}



const styles = StyleSheet.create({

    body:{
        flex:1,
        backgroundColor:'#8daeec'
       // backgroundColor:'#e2ebf7'
    }, 
    scrollContainer:{
    
        paddingBottom:wp('20%')
      }, 
    bodyCard:{
      width:wp('96%'),
      height:wp('30%'), 
      backgroundColor:'#e2ebf7',  
      marginHorizontal:wp('2%'), 
      marginVertical:wp('1%'), 
      borderRadius:wp('3%'),
      paddingHorizontal:wp('5%'), 
      elevation:6
    }, 
    bodyCardTitle:{
      fontSize:wp('5%'), 
      textAlign:'center', 
      marginVertical:wp('2%'), 
      fontWeight:'bold', 
      color:'#000', 
      textDecorationLine:'underline'
    },
    bodyCardText:{
        color:'#000', 
         fontSize:wp('4%'),
         fontWeight:'bold',
         textAlign:'center'
    },
    topicContainer:{
        backgroundColor:'#e2ebf7', 
        margin:wp('2%'), 
        padding:wp('4%'), 
        borderRadius:wp('3%'),
        elevation:6
    }, 
    topicContainerTitle:{
      fontSize:wp('5%'), 
      textAlign:'center', 
      fontWeight:'bold', 
      color:'#000'
    }, 
    topicContainerText:{
      fontSize:wp('4.5%'),
      color:'#000'
    },
    topicbtnContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end'
    },
    topicContainerbtn:{
      marginHorizontal:wp('2%')
     
    }
})