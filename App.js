import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SearchInput from './src/components/input';
import ProductCard from './src/components/Card';
import Products_Data from './src/products_data.json';

export default App = () => {
  const productRender = ({item}) => <ProductCard products={item}/>
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>PATIKASTORE</Text>
      <SearchInput />
      <FlatList
      data={Products_Data}
      renderItem={productRender}
      numColumns= '2'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  appTitle: {
    fontSize : 35,
    color: 'purple',
    fontWeight : 'bold',
    marginLeft : 10
  }
});
