import React, { VFC } from 'react'
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setOrigin } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import { NavOptions } from '../Components/NavOptions'

export const HomeScreen: VFC = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`h-full`}>
      <Text style={tw`text-red-500 p-10`}>Hello</Text>
      <Image
        style={tw`rounded-3xl`}
        width={100}
        height={100}
        resizeMode={'contain'}
        source={{
          uri: 'https://yt3.ggpht.com/Qj-lyidMW6xtEdnv6rDYscGE1kO6K06-i4v8Eiij96YOTo_WdBboLVlEKeE3749ywpyqTec2=s176-c-k-c0x00ffffff-no-rj',
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
