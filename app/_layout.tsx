import { Stack } from "expo-router";

const  RootLayout=()=> {
  return (

    <Stack screenOptions={{headerShown:false}}>

      <Stack.Screen name="index"/>
      <Stack.Screen name="Login"/>
      <Stack.Screen name="SignUp"/>
      <Stack.Screen name="Story"/>
      <Stack.Screen  name="ImageList"/>
      
    </Stack>
  );
}

export default RootLayout;