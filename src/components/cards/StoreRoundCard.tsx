import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

interface StoreRoundCardProps {
    label: string;
    onPress?: () => void;
}

const StoreRoundCard: React.FC<StoreRoundCardProps> = ({ label, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../../assets/images/catpizza.jpeg")}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text>{label}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    imageContainer: {
        overflow: "hidden",
        borderRadius: 100,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
});

export default StoreRoundCard;
