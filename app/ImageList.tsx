import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageList = () => {


    const [iamge, setImage] = useState([])
    const [loading, SetLoading] = useState(true);


    useEffect(() => {


        const FeactGlImage = async () => {

            try {
                const response = await axios.get(`https://picsum.photos/`)
                setImage(response.data);
                SetLoading(false);

            }
            catch (error) {
                console.log(error);
       
            }
            FeactGlImage();
        }

        },[])
        console.log(iamge);
    const data = [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 14, 18, 20, 30, 40, 50, 6014, 18, 20, 30, 40, 50, 60, 70, 70]; // Ensure the data array has unique values or keys

    return (
        <View style={styles.container}   >
            <Text style={styles.title}>Your Gallery Collection</Text>
            <FlatList


                numColumns={3}
                data={data}
                keyExtractor={(item, index) => index.toString()} // Use index as a fallback key
                renderItem={({ item }) => (
                    <View style={styles.listCard}>

                        <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listCard: {
        height: 100,
        width: 100,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginLeft: "auto",
        marginTop: 20,
        justifyContent: 'center',
        elevation: 5, // For Android shadow
    },
});

export default ImageList;
