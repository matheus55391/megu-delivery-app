import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign,Feather } from '@expo/vector-icons';


const StoreCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/images/catpizza.jpeg')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.storeName}>Gato-Lanches</Text>
                <View style={styles.ratingContainer}>
                    <Text> <AntDesign name="star" size={20} color="yellow" /> </Text>
                    <Text style={styles.ratingText}>4 (4.4k reviews) . Fast Food</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.icon}> <Feather name="map-pin" size={18} color="black" /> </Text>
                    <Text style={styles.address}>Endereco</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        borderWidth: 0.5,
        borderColor: "#ccc",
        borderRadius: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
        maxHeight: 250,
        margin: 16,
        overflow: "hidden",
    },
    imageContainer: {
        height: 120,
    },
    image: {
        width: '100%', 
        height: '100%', 
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 'auto',
        padding: 16,
        paddingVertical: 8,
    },
    storeName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    ratingText: {
        marginLeft: 8,
        fontSize: 14,
        color: "#888",
    },
    detailsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 8,
    },
    address: {
        fontSize: 14,
    },
});

export default StoreCard;
