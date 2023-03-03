import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../utils/api';
import { getItemFromSessionStorage } from '../utils/token';


const ShopList = () => {
  const [shops, setShops] = useState([]);


  const getShop = async ()=>{
    const headers = {
        Authorization: `Bearer ${getItemFromSessionStorage('userToken')}`,
        'Content-Type': 'application/json',
    };
    try {
          const response = await api.post(`/shops`, { headers });
          setShops(response.data)
    } catch (error) {
        console.error(error);
    }
  }
  useEffect(() => {
    getShop()
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.shopContainer}>
      <Text style={styles.shopName}>{item.name}</Text>
      <Text style={styles.shopAddress}>{item.address}</Text>
    </View>
  );

  return (
    <FlatList
      data={shops}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  shopName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  shopAddress: {
    fontSize: 14,
    color: '#666',
  },
});

export default ShopList;
