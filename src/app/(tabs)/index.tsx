import { StyleSheet, View, Text, ScrollView } from 'react-native';
import StoreCard from '../../components/cards/StoreCard';
import React from 'react';
import StoreRoundCard from '../../components/cards/StoreRoundCard';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <ScrollView style={styles.cardContainer} horizontal showsHorizontalScrollIndicator={false}>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ScrollView>
      <ScrollView style={styles.cardContainer} horizontal showsHorizontalScrollIndicator={false}>
        <StoreRoundCard label='Pizza'/>
        <StoreRoundCard label='Pizaa'/>
        <StoreRoundCard label='Pizza'/>
        <StoreRoundCard label='Pizza'/>
        <StoreRoundCard label='Pizza'/>
        <StoreRoundCard label='Pizza'/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cardContainer: {
    flexDirection: 'row', // Alinha os componentes horizontalmente
    maxHeight: 250,
  },
});
