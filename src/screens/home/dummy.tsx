// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Platform, PermissionsAndroid} from 'react-native';
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

// import MapView, {Marker} from 'react-native-maps';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {Text} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const HomeScreen = () => {
//   const [initialRegion, setInitialRegion] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//     latitudeDelta: 0.0922,
//     longitudeDelta: LONGITUDE_DELTA,
//   });
//   const [currentLocation, setCurrentLocation] = useState();

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           const watchId = Geolocation.watchPosition(
//             position => {
//               const {latitude, longitude} = position.coords;
//               setCurrentLocation({latitude, longitude});
//               setInitialRegion();
//             },
//             error => console.error(error),
//             {enableHighAccuracy: true, distanceFilter: 10},
//           );

//           // Clean up the watcher when the component unmounts
//           return () => {
//             Geolocation.clearWatch(watchId);
//           };
//         } else {
//           console.log('Location permission denied');
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     };

//     requestLocationPermission();
//   }, []);

//   return (
//     <View style={{flex: 1}}>
//       <MapView
//         style={styles.map}
//         initialRegion={initialRegion}
//         showsUserLocation={true}>
//         {currentLocation && (
//           <Marker
//             coordinate={{
//               latitude: currentLocation.latitude,
//               longitude: currentLocation.longitude,
//             }}
//             isPreselected={true}
//           />
//         )}
//       </MapView>

//       {/* Search bar */}
//       <GooglePlacesAutocomplete
//         placeholder="Search"
//         onPress={(data, details) => {
//           // 'details' contains information about the selected place
//           setInitialRegion({
//             latitude: details.geometry.location.lat,
//             longitude: details.geometry.location.lng,
//             latitudeDelta: 0.0922,
//             longitudeDelta: LONGITUDE_DELTA,
//           });
//           setCurrentLocation({
//             latitude: details.geometry.location.lat,
//             longitude: details.geometry.location.lng,
//           });
//         }}
//         query={{
//           key: 'AIzaSyBVq1YHt0rZrbQGLXL9CdL2VeU9kjtfO4I',
//           language: 'en',
//           components: 'country:ind', // Adjust this based on your requirements
//         }}
//         styles={styles.autoCompleteContainer}
//         fetchDetails={true}
//         currentLocation={true}
//         currentLocationLabel="Current location"
//         listViewDisplayed="auto"
//       />
//       <Text>{currentLocation?.longitude}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//   },
//   autoCompleteContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1,
//   },
// });

// export default HomeScreen;

// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import MapView from 'react-native-maps';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default HomeScreen;

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const HomeScreen = () => {
//   const [markerCoordinate, setMarkerCoordinate] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//   });

//   const [mapRegion, setMapRegion] = useState({
//     latitude: 37.421983730073165,
//     longitude: -122.08399968221784,
//     latitudeDelta: 0.09263827614262254,
//     longitudeDelta: 0.06289478391410341,
//   });

//   const handleRegionChange = region => {
//     // Update the marker's latitude and longitude based on the map's center
//     setMarkerCoordinate({
//       latitude: region.latitude,
//       longitude: region.longitude,
//     });
//     console.log(region, 'regionregion');
//   };

//   const handleConfirmZoom = () => {
//     // Example: Zoom in by adjusting the latitude and longitude deltas
//     const newRegion = {
//       ...markerCoordinate,
//       latitudeDelta: 0.02,
//       longitudeDelta: 0.02,
//     };

//     // Use animateToRegion to smoothly zoom in
//     this.mapRef.animateToRegion(newRegion, 1000);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         ref={ref => (this.mapRef = ref)} // Store a reference to the map
//         style={{ flex: 1 }}
//         initialRegion={mapRegion}
//         showsUserLocation={true}
//         onRegionChangeComplete={handleRegionChange}
//       >
//         <Marker
//           coordinate={markerCoordinate}
//           title="Current Location"
//           description="You are here"
//           pinColor="red"
//         />
//       </MapView>

//       {/* Button at the bottom to confirm and zoom */}
//       <TouchableOpacity
//         style={{
//           position: 'absolute',
//           bottom: 16,
//           alignSelf: 'center',
//           backgroundColor: 'blue',
//           padding: 10,
//           borderRadius: 8,
//         }}
//         onPress={handleConfirmZoom}
//       >
//         <Text style={{ color: 'white' }}>Confirm Zoom</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomeScreen;

// asdf-----------
// import React, {useState} from 'react';
// import {View, TouchableOpacity, Text} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const HomeScreen = () => {
//   const [markerCoordinate, setMarkerCoordinate] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//   });

//   const [mapRegion, setMapRegion] = useState({
//     latitude: 37.421983730073165,
//     longitude: -122.08399968221784,
//     latitudeDelta: 0.09263827614262254,
//     longitudeDelta: 0.06289478391410341,
//   });

//   const [mapType, setMapType] = useState('standard');

//   const handleRegionChange = region => {
//     // Update the marker's latitude and longitude based on the map's center
//     setMarkerCoordinate({
//       latitude: region.latitude,
//       longitude: region.longitude,
//     });
//   };

//   const handleConfirmZoom = () => {
//     // Example: Zoom in by adjusting the latitude and longitude deltas
//     const newRegion = {
//       ...markerCoordinate,
//       latitudeDelta: 0.003,
//       longitudeDelta: 0.003,
//     };

//     // Use animateToRegion to smoothly zoom in
//     this.mapRef.animateToRegion(newRegion, 1000);
//   };

//   const handleToggleMapType = () => {
//     setMapType(prevMapType =>
//       prevMapType === 'standard' ? 'satellite' : 'standard',
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <MapView
//         ref={ref => (this.mapRef = ref)} // Store a reference to the map
//         style={{flex: 1}}
//         initialRegion={mapRegion}
//         showsUserLocation={true}
//         onRegionChangeComplete={handleRegionChange}
//         mapType={mapType}>
//         {markerCoordinate && (
//           <Marker
//             coordinate={markerCoordinate}
//             title="Current Location"
//             description="You are here"
//             pinColor="red"
//           />
//         )}
//       </MapView>

//       {/* Button at the bottom to confirm and zoom */}
//       <TouchableOpacity
//         style={{
//           position: 'absolute',
//           bottom: 16,
//           alignSelf: 'center',
//           backgroundColor: 'blue',
//           padding: 10,
//           borderRadius: 8,
//         }}
//         onPress={handleConfirmZoom}>
//         <Text style={{color: 'white'}}>Confirm Zoom</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           position: 'absolute',
//           top: 80,
//           right: 10,
//           alignSelf: 'center',
//           backgroundColor: '#f3f3f3',
//           padding: 6,
//           borderRadius: 2,
//         }}
//         onPress={handleToggleMapType}>
//         <Icon
//           name={mapType === 'standard' ? 'map' : 'satellite'}
//           size={26}
//           color="grey"
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomeScreen;

// simple----------
// import React from 'react';
// import {View} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';

// const HomeScreen = () => {
//   return (
//     <View style={{flex: 1}}>
//       <MapView
//         style={{flex: 1}}
//         initialRegion={{
//           latitude: 37.7749,
//           longitude: -122.4194,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}>
//         <Marker
//           coordinate={{latitude: 37.7749, longitude: -122.4194}}
//           title="Current Location"
//           description="You are here"
//           pinColor="red" // Customize the color of the marker
//         />
//       </MapView>
//     </View>
//   );
// };

// export default HomeScreen;









// ///////
import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, PermissionsAndroid} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [markerCoordinate, setMarkerCoordinate] = useState({});
  const mapRef = useRef(null);

  useEffect(() => {
    // Get the user's current location
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            const region = {
              latitude,
              longitude,
              latitudeDelta: 0.09263827614262254,
              longitudeDelta: 0.06289478391410341,
            };
            setMapAndMarker(region);
          },
          error => console.log('Error getting location: ', error),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const setMapAndMarker = region => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(region, 1000);
    }
    setCurrentLocation(region);
    setMarkerCoordinate({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  const handleRegionChange = region => {
    // Update the marker's latitude and longitude based on the map's center
    setMarkerCoordinate({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        style={{flex: 1}}
        initialRegion={
          Object.keys(currentLocation).length !== 0
            ? currentLocation
            : undefined
        }
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={false}
        onRegionChangeComplete={handleRegionChange}
        pointerEvents="none"
        scrollEnabled={false}
        zoomEnabled={false}>
        {markerCoordinate.latitude && markerCoordinate.longitude && (
          <Marker
            coordinate={markerCoordinate}
            title="Current Location"
            description="You are here"
            pinColor="red"
          />
        )}
      </MapView>

      <View
        style={{
          position: 'absolute',
          bottom: 16,
          left: 20,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 8,
          elevation: 5,
        }}
        pointerEvents="auto">
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            textAlign: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}>
          Look like your city hasn't posted any local content on Civic356.
        </Text>
        <TouchableOpacity
          style={{
            padding: 10,
          }}
          onPress={() => {
            console.log('Link pressed');
          }}>
          <Text
            style={{
              color: '#9e0fb5',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Report an issue to your community
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;