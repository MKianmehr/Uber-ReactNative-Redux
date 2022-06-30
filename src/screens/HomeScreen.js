import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            dispatch({
              location: details.geometry.location,
              description: data.description,
            });
            dispatch(setDestination(null));
          }}
          enablePoweredByContainer={false}
          returnKeyType={'search'}
          fetchDetails={true}
          styles={{ container: { flex: 0 }, textInput: 18 }}
          placeholder="Where From?"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
