import React, { VFC } from 'react'
import { Image, SafeAreaView, TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { NavOptions } from '../Components/NavOptions'
import { Footer } from '../Components/Footer'
import { GOOGLE_MAPS_APIKEY } from '@env'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export const HomeScreen: VFC = () => {
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
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0, // なんでこれで詰まるの？？
          },
          textInput: {
            fontSize: 18,
          },
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder="Where From?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details)
        }}
        onFail={() => {
          console.log('FAIELD')
        }}
        enablePoweredByContainer={false} // なにこれ
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'ja',
        }}
      />
      <NavOptions />

      <TextInput
        style={tw`mt-auto bg-blue-100 p-4 font-bold`}
        placeholder={'hello'}
        onChange={(e) => {
          console.log(e.nativeEvent.text)
        }}
      />
      <Footer />
    </SafeAreaView>
  )
}
