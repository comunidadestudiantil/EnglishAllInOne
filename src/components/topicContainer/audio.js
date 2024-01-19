import {useEffect, useState, useRef} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../utils/responsive';
import {Ionicons, Fontisto, FontAwesome5, AntDesign, MaterialCommunityIcons} from '../../utils/icons'; 
import Sound  from 'react-native-sound'; 
import { exists, downloadFile, mkdir, DocumentDirectoryPath, readDir, unlink } from 'react-native-fs';


export function Audio({nameOfAudio, showOption, setShowOption,audioToBePlay, setaudioToBePlay, index, listOfPlaying, setListOfPlaying}) {
    
  const [url, setUrl] = useState(''); 



useEffect(()=>{

const playSound = new Sound(`${DocumentDirectoryPath}/${nameOfAudio}.mp3`, Sound.LIBRARY, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
  
 })
  

  setaudioToBePlay((prev)=> [...prev, playSound])  
  
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
       
   const audioRuning = String(audioToBePlay[index]?._filename).split('/').at(-1); 


 if(name === audioRuning){

    if(action ==='play'){


      if(listOfPlaying.length){
         console.log(listOfPlaying, 'index that is on the list')
         audioToBePlay[listOfPlaying[0]].stop(); 
         setListOfPlaying([]); 
        
      }

     // audioToBePlay[index].setCurrentTime(5)
      audioToBePlay[index].play(); 
      audioToBePlay[index].setSpeed(0.8)
      setListOfPlaying([index]); 
   
    }


    if(action ==='stop'){
      audioToBePlay[index].stop(); 

    }
   } 

 }


 
async function getDiccionaryData() {

  try {

    const saveLocation = `${DocumentDirectoryPath}/Singularandpluralnouns1.mp3`; 
    const outputUnzip = `${DocumentDirectoryPath}`; 

  

    const res = await downloadFile({
        fromUrl:'https://www.dropbox.com/scl/fi/vdlp9km4aur19kqv7nc0i/ElevenLabs_2024-01-13T14_26_13_Michael.mp3?rlkey=aeehi136ayrqcuabj5zd0l5f0&dl=1',
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

function openShowOption(){
 // setShowOption(null)
  setShowOption([index])
  //console.log(showOption)
 
}

//

  return (
    
        <View style={styles.Container}>
          
            {showOption.includes(index) ?(
             <View style={styles.topicbtnContainer}>
                <TouchableOpacity style={styles.topicContainerbtn} onPress={()=>  getDiccionaryData()}>
                    <FontAwesome5 name="cloud-download-alt" size={wp('6.5%')} color={'#f4f7fa'} />
                  </TouchableOpacity>
                 
                  <TouchableOpacity style={styles.topicContainerbtn}>
                    <MaterialCommunityIcons name="snail" size={wp('7%')} color={'#414e6e'} />
                  </TouchableOpacity>
                 
                  <TouchableOpacity style={styles.topicContainerbtn}>
                      <AntDesign name="caretleft" size={wp('7%')} color={'#414e6e'} />
                  </TouchableOpacity>
    
                  <TouchableOpacity style={styles.topicContainerbtn} onPress={()=> handlePlaySound({name:`${nameOfAudio}.mp3`, action:'play', index})}>
                     <AntDesign name={!listOfPlaying.includes(index)?"play":"pausecircle"} size={wp('7%')} color={'#414e6e'} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.topicContainerbtn}>
                     <AntDesign name="caretright" size={wp('7%')} color={'#414e6e'} />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.topicContainerbtn} onPress={()=> setShowOption([])}>
                    <Ionicons name="close-circle" size={wp('8%')} color={'#f4f7fa'} />
                  </TouchableOpacity>
                </View>
              ):(
                <TouchableOpacity style={styles.topicContainerbtn} onPress={()=> openShowOption()}>
                  <Fontisto name="volume-down" size={wp('6%')} color={'#293042'} />
                </TouchableOpacity>
              )

            }
          
      
      
        </View>

  );
}



const styles = StyleSheet.create({
  Container:{
  //  zIndex:-1,
    position:'relative',
    left:wp('-2%'),
    top:wp('-4%'),
    width:wp('100%'),
    height:wp('13%'),
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'#9cb6dd',
    //marginBottom:wp('0.2%')
  },
    topicbtnContainer:{
      position:'absolute',
      width:wp('100%'),
      height:wp('10%'),
      flexDirection:'row',
     // backgroundColor:'#3f4b69',
      marginBottom:wp('1%'),
      justifyContent:'flex-end',
      alignItems:'center', 
      paddingHorizontal:wp('3%')
    },
    topicContainerbtn:{
      marginHorizontal:wp('1.5%')
     
    }
})