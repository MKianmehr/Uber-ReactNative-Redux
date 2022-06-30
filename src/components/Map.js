import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { selectOrigin } from '../redux/slices/navSlice';
import tw from 'twrnc';

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        title="Origin"
        description="San Francisco"
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
