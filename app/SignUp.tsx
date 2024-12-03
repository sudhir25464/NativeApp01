import { View, Text , Image, TextInput, StyleSheet} from 'react-native'
import React from 'react'

import Button from '@/component/Button';
const SignUp = () => {

   const onRegister =()=>{

   }
  return (
    <View style={{flex:1}}>
      <Image source={require("@/assets/images/signup.jpg")} style={{height:300, width:"100%"}}>

      </Image>

      <View  style={styles.input_container} >

        <TextInput   onChange={(e)=>console.log(e)} style={styles.input} placeholder='Enter Your name' ></TextInput>
        <TextInput style={styles.input} placeholder='Enter email '  ></TextInput>
        <TextInput style={styles.input} placeholder='Enter Password'></TextInput>
        <TextInput style={styles.input} placeholder='Enter Number'></TextInput>

 
        <Button title={"Register"}  onpress={onRegister} />
      </View>

    </View> 
  )
}


const styles= StyleSheet.create({

  input_container:{
    paddingHorizontal:10,
    marginHorizontal:5,
   
    gap:2,
    paddingTop:40,
    flex:0.5,
    flexGrow:1,
    backgroundColor:'silver'
     },
   
     input:{
         height:50,
         marginBottom:7,
         backgroundColor:"white",
         borderRadius:5,
         borderColor:"green",
         borderWidth:1,
         paddingHorizontal:10,
         color:"black"
    
         
     },
   

})
   
export default SignUp