import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'react-native';

export default function Mapa() {
  return (
    <View style={styles.container}>
      <MapView
       style={styles.map}
       initialRegion={{
         latitude: -5.825992589272648,
         longitude: -36.58320102560524,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421
       }}>
          <Marker></Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});