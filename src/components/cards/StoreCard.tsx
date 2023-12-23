import React from "react"
import { View, Text, StyleSheet } from "react-native"

const StoreCard = () => {
    return (
        <View>
            <View>
                <Text>Imagem</Text>
            </View>
            <View>
                <Text>Gato-Lanches</Text>
                <View style={styles.Endereco}>
                    <Text>Icon</Text>
                    <Text>Endereco</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Endereco:{
        flex:1,
        flexDirection:'row'
    }


});

export default StoreCard