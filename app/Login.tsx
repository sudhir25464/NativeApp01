import { View, Text, Image, StyleSheet, TextInput,Alert } from "react-native"

import React, { useState } from "react"
import Button from "@/component/Button"
import { useRoute } from "@react-navigation/native"
import { useRouter } from "expo-router"


const  Login=() =>{


   const [inputName , setInputName] = useState("")
   const [inputPassword , setInputPassword] = useState("")

const router = useRouter()
  const onLogin=()=>{
    // router.navigate ("/SignUp")

    console.log(inputName);

    console.log(inputPassword);
    setInputName('');
    setInputPassword('');

    wait();
    alertfn();

  }

  const wait =()=>{
    setTimeout(()=>{
      router.navigate ("/Story")
  },2000)
  }


  const alertfn = ()=>{
 Alert.alert("Wait Few Second Dear ");
  }


  return (
  <View style={{flex:1}}>
    <View>
      <Image  source={ require("@/assets/images/login.jpg")} 
      style={{
        height:350,
        width:'100%',
      }}
      resizeMode="cover"
      ></Image>
    </View>
    <View style={styles.input_container}>

      
      <TextInput style={styles.input} value={inputName}  onChangeText={(e)=>{setInputName(e)}} placeholder="Enter your name"></TextInput>

      <TextInput style={styles.input}  value={inputPassword} onChangeText={(e)=>{setInputPassword(e)}} placeholder="Enter your password"></TextInput>
 
      <Button title={"Login"} onpress={onLogin}/>
    </View>
    <Text style={styles.small_text}> If You Dont have account, Craete new </Text>


  </View>
  )
}


const styles = StyleSheet.create({
  input_container:{
 paddingHorizontal:10,
 marginHorizontal:5,

 gap:2,
 paddingTop:40,
 flex:0.5,
 flexGrow:1,
 backgroundColor:'pink'
  },

  input:{
      height:50,
      marginBottom:7,
      backgroundColor:"white",
      borderRadius:5,
      
  },

  small_text:{
    justifyContent:"center",
    alignItems:'center',
    textAlign: 'center',
    color:'blue',
    fontSize:12,
    width:"100%"
  }
})
export default Login
