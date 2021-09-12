import React, { VFC } from 'react'
import { Image, SafeAreaView, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setOrigin } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import { NavOptions } from '../Components/NavOptions'

export const HomeScreen: VFC = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`h-full`}>
      <Image
        style={tw`rounded-3xl`}
        width={150}
        height={100}
        resizeMode={'contain'}
        source={{
          uri: 'https://i1.wp.com/goworkship.com/magazine/app/uploads/2018/09/Uber_Logo_Black.png',
        }}
      />
      <View>
        <TextInput
          onChange={(e) => {
            const value = e.nativeEvent.text
            dispatch(setOrigin(value))
          }}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  )
}
