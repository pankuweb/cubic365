import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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
          {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000},
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
    setMarkerCoordinate({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  return (
    <View style={{flex: 12}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details) => {
          setMarkerCoordinate({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          });
          setCurrentLocation({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          });
          setMapAndMarker({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          });
        }}
        query={{
          key: 'AIzaSyBVq1YHt0rZrbQGLXL9CdL2VeU9kjtfO4I',
          language: 'en',
          components: 'country:ind',
        }}
        styles={{
          container: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          },
          listView: {
            position: 'absolute',
            top: 50, // Adjust this value based on your design
            backgroundColor: 'transparent', // Make the background transparent
            zIndex: 2,
          },
        }}
        fetchDetails={true}
        currentLocation={true}
        currentLocationLabel="Current location"
        listViewDisplayed="auto"
      />

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
            title="Selected Location"
            description="You selected this place"
            pinColor="red"
          />
        )}
      </MapView>

      <View
        style={{
          position: 'absolute',
          bottom: 36,
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
            Report an issue to your community{' '}
            {currentLocation.latitude ? currentLocation.latitude : 'asdf'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
