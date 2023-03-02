import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../../context';
import PageContainer from '../templates/page_container';

const Home = () => {
const { isSeller } = useContext(AppContext);

  return (
    <PageContainer>
        {
        isSeller ? 
            <View>Je suis un vendeur</View>
            //ici la liste de mes boutiques
        : 
            <View>Je ne suis pas un vendeur</View>
            //ici la liste de mes reservations
        }
    </PageContainer>
  );
};

export default Home;