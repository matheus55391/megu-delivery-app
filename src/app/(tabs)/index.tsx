import { StyleSheet,View,Text } from 'react-native';


import StoreCard from '../../components/cards/StoreCard';
import React from 'react';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <StoreCard></StoreCard>
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
});
