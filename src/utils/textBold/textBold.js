//import React from 'react'; 
import { Text} from 'react-native';


export const BoldStyle = (props) => {
    
  const texto = props.children
 
  if(!texto) return; 
  

  function modifiedSplit(data, key) {
    let next = false; 
    let concat =""
    let text = []
    let long =data.length-1
  
  for(let i in data){
      if(data[i] === key && !next){
        
        text.push(concat)     
        concat =data[i]     
        next = true;
        
      }else if(data[i] ===key && next){
        concat +=data[i]
        text.push(concat)
        next = false
        concat =""
        
      }else if (next){
        
        concat +=data[i]
        
      } else if(!next){
        concat += data[i]
      }
  
    if((parseFloat(i)=== long && next) || (parseFloat(i)=== long && !next)){
        text.push(concat)
      }
    
    
    }
    return text
  }


 
  let texto2 = modifiedSplit(texto,'*')

  let letra = []
    
  for(let i in texto2){
      if(texto2[i].trim().startsWith("*") && texto2[i].trim().endsWith("*") ){
      
        
        let textToBeRender= texto2[i].trim().length > 1 ?<Text key={i} style={{fontWeight:'bold'}}>{texto2[i].replaceAll("*", "")}</Text>:
        <Text key={i} style={{fontWeight:'bold'}}>{texto2[i]}</Text>

        letra.push(textToBeRender)

      }else {
        
        letra.push(<Text key={i}>{texto2[i]}</Text>)

      }

  
  }

  return (
    <>{letra}</>
  )

}


export const Bold = (props) => {
    
    const texto = props.children
    if(!texto){
      return; 
    }
  

    function modifiedSplit(data, key) {
      let next = false; 
      let concat =""
      let text = []
      let long =data?.length-1
    
    for(let i in data){
       if(data[i] ===key && !next){
         
         text.push(concat)     
         concat =data[i]     
         next = true;
         
       }else if(data[i] ===key && next){
         concat +=data[i]
         text.push(concat)
         next = false
         concat =""
         
       }else if (next){
         
         concat +=data[i]
         
       } else if(!next){
          concat += data[i]
       }
    
      if((parseFloat(i)=== long && next) || (parseFloat(i)=== long && !next)){
         text.push(concat)
       }
      
      
     }
      return text
    }


 
  let texto2 = modifiedSplit(texto,'*')

  let letra = []
    
  for(let i in texto2){
    
    if(texto2[i].trim().startsWith("*") && texto2[i].trim().endsWith("*") ){
     
      let textToBeRender= texto2[i].trim().length > 1 ?<Text key={i} style={{fontWeight:'bold'}}>{texto2[i]}</Text>:
      <Text key={i} style={{fontWeight:'bold'}}>{texto2[i]}</Text>

      letra.push(textToBeRender)

    }else {
        
      letra.push(<Text key={i}>{texto2[i]}</Text>)

    }
 
}

    return (
      <>{letra}</>
    )
  }