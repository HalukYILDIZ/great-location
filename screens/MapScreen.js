/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Colors from "../constants/Colors";

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationhandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("You didnt picked location");
      return;
    }
    props.navigation.navigate("NewPlace", { pickedLocation: selectedLocation });
    console.log("ne gidiyo:" + selectedLocation);
  }, [selectedLocation]);
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={savePickedLocationHandler}
        >
          <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [savePickedLocationHandler]);
  let markerCoordinates;
  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }
  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationhandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates}></Marker>
      )}
    </MapView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Map",
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
  };
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});
export default MapScreen;
