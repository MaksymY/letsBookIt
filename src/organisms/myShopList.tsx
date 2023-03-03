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
          const response = await api.get(`/shops`, {headers});
          console.log(response.data)
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
      <Text style={styles.shopName}>{item.Name}</Text>
      <Text style={styles.shopName}>{item.Reservation}</Text>
      <Text style={styles.shopAddress}>{item.Address}</Text>
    </View>
  );

  return (
    <FlatList
      data={shops}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff'
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
