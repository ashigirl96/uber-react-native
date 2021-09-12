import React, { VFC } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import MapView from 'react-native-maps'

export const MapScreen: VFC = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View>
        <Text>Hello</Text>
        <MapView
          style={tw`flex-1`}
          mapType="mutedStandard"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <Text>Hello</Text>
    </SafeAreaView>
  )
}
