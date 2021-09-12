import React, { VFC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

export const Footer: VFC = () => {
  return (
    <View
      style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
    >
      <TouchableOpacity
        style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}
      >
        <Icon name={'car'} type={'font-awesome'} color="white" size={16} />
        <Text style={tw`text-white text-center`}>Rides</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}
      >
        <Icon name={'car'} type={'font-awesome'} color="white" size={16} />
        <Text style={tw`text-white text-center`}>Rides</Text>
      </TouchableOpacity>
    </View>
  )
}
