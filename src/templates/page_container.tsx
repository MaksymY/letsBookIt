import { View, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const PageContainer = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

export default PageContainer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
