import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'



const Story = () => {


    const SeeImage=()=>{
          router.navigate("/ImageList")
    }
    return (
        <>
            <View style={styles.Theme}>
                <Text style={styles.Headline}> Story </Text>
                <ScrollView horizontal  showsHorizontalScrollIndicator={false}  >


                    {
                        [1, 2, 3, 4, 5, 6, 6].map((item,index) => {
                            return (
                                <View  key={index} style={{ height: 100, width: 100, backgroundColor: "blue", marginLeft: 2, borderRadius: 50, marginTop: 5 }}></View>
                            )
                        })
                    }


                </ScrollView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.card}></View>
                    <View style={styles.card}></View>
                    <View style={styles.card}></View>
                </ScrollView>


                    
                <View style={{ justifyContent:'center', alignItems:"center" }} >

                    <View style={styles.post} >
                       
                    </View>
                    <Text  onPress={SeeImage} style={{color:"blue", zIndex:1}}>See All images</Text>

                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    Theme: {
        
        backgroundColor: "#fffff"


    },

    Headline: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom:20
        

    },
    card: {
        height: 200,
        width: 300,
        padding: 10,
        gap: 4,
 
        backgroundColor:"pink",
        marginLeft:3,
        marginTop:20,
        marginBottom:20,
        borderRadius:20,
    },
    post:{
        
        flex:1,
        height:200,
            width: 300,
            padding: 150,
            marginBottom: 10,
            backgroundColor: "white",
            borderRadius: 10,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            

         
        }
    
})
export default Story;