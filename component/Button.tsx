import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({title, onpress}) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.7}

            onPress={onpress}
                style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles= StyleSheet.create({
button:{
    backgroundColor: "black",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
},
text:{
color:'white',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
paddingVertical:7,



}
})

export default Button