import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SearchInput from './src/components/input';
import ProductCard from './src/components/Card';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>PATIKASTORE</Text>
      <SearchInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5
  },

  appTitle: {
    fontSize : 35,
    color: 'purple',
    fontWeight : 'bold',
    marginLeft : 5
  }
});
