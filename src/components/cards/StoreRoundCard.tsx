import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


interface StoreRoundCardProps {
    label: string;
  }

const StoreRoundCard:React.FC<StoreRoundCardProps> = ({ label }) => {
    return (
        <View>
            <View>
                <Image
                    source={require('../../../assets/images/catpizza.jpeg')}
                    resizeMode="cover"
                />
            </View>
            <View>
                <Text>
                    {label}
                </Text>
            </View>
        </View>
    );
}