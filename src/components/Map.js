import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import tw from 'twrnc';

const Map = () => {
  return <MapView style={tw`flex-1`} />;
};

export default Map;

const styles = StyleSheet.create({});
