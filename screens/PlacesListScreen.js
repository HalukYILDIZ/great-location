import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlacesListScreen = props => {
  return (
    <View>
      <Text>PlacesListScreen!</Text>
    </View>
  );
};

// PlacesListScreen.navigationOptions = {
//     headerTitle: 'All Places'
// };
export const screenOptions = navData => {
  return {
    headerTitle: 'All Places',
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

const styles = StyleSheet.create({});

export default PlacesListScreen;
