import React, { VFC } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: '123',
    title: 'Get a rider',
    image:
      'https://yt3.ggpht.com/ytc/AKedOLSGyQadwaaYuZy1zy33pdrj0yQLP_WVQziEbUwOJg=s176-c-k-c0x00ffffff-no-rj',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image:
      'https://yt3.ggpht.com/vzL8yY1FFmDm4G2veuiiJNyA6Ssp44-fU24rSbH6tl_h0crwMjeZzmsVF-FJEnfT9zRzHGiPqQ=s176-c-k-c0x00ffffff-no-rj',
    screen: 'EatsScreen',
  },
]

export const NavOptions: VFC = () => {
  const origin = useSelector((state) => state.nav.origin)
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
              <Image
                // width={120}
                // height={120}
                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
