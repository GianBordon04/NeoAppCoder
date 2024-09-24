

import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import Search from '../components/Search';
import ProductItem from '../components/ProductItem';
import { useGetProductsQuery } from '../services/shop';
import LoadingSpinner from '../components/LoadingSpinner';

const ItemListCategories = ({ route }) => {
  const { category } = route.params;
  const { data: products, isSuccess, isLoading, isError, error } = useGetProductsQuery(category);
  const [productsFiltered, setProductsFiltered] = useState([]);

  console.log("Products data:", products); 

  console.log("Loading state:", isLoading);
  if (error) {
    console.error("Error fetching products:", error);
  }

  useEffect(() => {
    if (isSuccess) {
      setProductsFiltered(products);
    }
  }, [category, isSuccess, products]);

  const onSearch = useCallback((input) => {
    if (input) {
      setProductsFiltered(products.filter(product => product.title.toLowerCase().includes(input.toLowerCase())));
    } else {
      setProductsFiltered(products);
    }
  }, [products]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{error?.message || 'Something went wrong'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>
        <Search onSearch={onSearch} />
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </Text>

    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  }
});
