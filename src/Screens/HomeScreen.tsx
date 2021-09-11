import React, { VFC } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setOrigin } from '../slices/navSlice'

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
})

export const HomeScreen: VFC = () => {
  const dispatch = useDispatch()
  const origin = useSelector((state) => state.nav.origin)

  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello</Text>
      <View>
        <TextInput
          onChange={(e) => {
            const value = e.nativeEvent.text
            dispatch(setOrigin(value))
          }}
        />
        <Text>I'm building Uber. {origin}</Text>
      </View>
    </SafeAreaView>
  )
}
