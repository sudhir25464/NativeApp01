import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'



const Story = () => {
    return (
        <>
            <View style={styles.Theme}>
                <Text style={styles.Headline}> Story </Text>
                <ScrollView horizontal  showsHorizontalScrollIndicator={false}  >


                    {
                        [1, 2, 3, 4, 5, 6, 6].map((item) => {
                            return (
                                <View style={{ height: 100, width: 100, backgroundColor: "blue", marginLeft: 2, borderRadius: 50, marginTop: 5 }}></View>
                            )
                        })
                    }


                </ScrollView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.card}></View>
                    <View style={styles.card}></View>
                    <View style={styles.card}></View>
                </ScrollView>


                    
                <View style={{flex:1, justifyContent:'center', alignItems:"center" backgroundColor:'green'}} >

                    <View style={styles.post} ></View>

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
            width: 200,
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