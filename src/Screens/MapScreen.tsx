import React, { VFC } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export const MapScreen: VFC = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}
