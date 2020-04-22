import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = props => {
  return (
    <View>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const screenOptions = navData => {
  return {
    headerTitle: 'Map',
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Cart"
    //       iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
    //       onPress={() => {
    //         navData.navigation.navigate('Cart');
    //       }}
      //   />
      // </HeaderButtons>
    // )
  };
};

export default MapScreen;
