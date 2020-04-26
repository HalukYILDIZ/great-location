import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import MapPreview from "../components/MapPreview";
import Colors from "../constants/Colors";

const PlaceDetailScreen = (props) => {
  const placeId = props.route.params ? props.route.params.placeId : null;
  const selectedPlace = useSelector((state) =>
    state.places.places.find((pl) => pl.id === placeId)
  );
  const selectedLocation = { lat: selectedPlace.lat, lng: selectedPlace.lng };
  const showMapHandler = () => {
    props.navigation.navigate("Map", {
      readonly: true,
      initialLocation: selectedLocation,
    });
  };
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{selectedPlace.address}</Text>
        </View>
        <MapPreview
          style={styles.mapPreview}
          location={selectedLocation}
          onPress={showMapHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
    alignSelf: "center",
  },
  locationContainer: {
    flex: 1,
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary,
    textAlign: "center",
  },
  mapPreview: {
    width: "100%",
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.placeTitle,
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

export default PlaceDetailScreen;
