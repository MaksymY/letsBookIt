import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../../context';
import ShopList from '../organisms/myShopList';
import PageContainer from '../templates/page_container';

const Home = () => {
const { isMerchant } = useContext(AppContext);

  return (
    <PageContainer>
        {
        isMerchant ? 
            <>
                <Text  style={styles.title}>Mes boutiques:</Text>
                <ShopList/>
            </>

        : 
            <Text>Je ne suis pas un vendeur</Text>
            //ici la liste de mes reservations
        }
    </PageContainer>
  );
};


const styles = StyleSheet.create({
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      margin: 10,
      color: '#666',
    },
});

export default Home;   