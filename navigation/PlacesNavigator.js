//import "react-native-gesture-handler";
import React from 'react';
import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen, {
  screenOptions as PlacesListScreenOptions,
} from "../screens/PlacesListScreen";
import PlaceDetailScreen, {
  screenOptions as PlacesDetailScreenOptions,
} from "../screens/PlaceDetailScreen";
import NewPlaceScreen, {
  screenOptions as NewPlaceScreenOptions,
} from "../screens/NewPlaceScreen";
import MapScreen, {
  screenOptions as MapScreenOptions,
} from "../screens/MapScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};
const ProductsStackNavigator = createStackNavigator();
const PlacesNavigator = () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions} >
        <ProductsStackNavigator.Screen
          name="Places"
          component={PlacesListScreen}
          options={PlacesListScreenOptions}
        />
        <ProductsStackNavigator.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={PlacesDetailScreenOptions}
        />
        <ProductsStackNavigator.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={NewPlaceScreenOptions}
        />
        <ProductsStackNavigator.Screen
          name="Map"
          component={MapScreen}
          options={MapScreenOptions}
        />
      </ProductsStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default  PlacesNavigator;
