import React, { useContext } from 'react';
import { View, Text } from 'react-native';
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
                <Text>Je suis un vendeur</Text>
                <ShopList/>
            </>

        : 
            <Text>Je ne suis pas un vendeur</Text>
            //ici la liste de mes reservations
        }
    </PageContainer>
  );
};

export default Home;