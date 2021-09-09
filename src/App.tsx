import React, { useState, VFC } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { setOrigin } from './slices/navSlice'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: '#ff0000',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const Origin: VFC = () => {
  const dispatch = useDispatch()
  const origin = useSelector((state) => state.nav.origin)

  return (
    <View>
      <TextInput
        onChange={(e) => {
          const value = e.nativeEvent.text
          dispatch(setOrigin(value))
        }}
      />
      <Text>{origin}</Text>
    </View>
  )
}

const App: VFC = () => {
  const [counter, setCounter] = useState(0)
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Let's build uber {counter}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#ffffff"
            onPress={() => setCounter((c) => c + 1)}
            title="Press"
          />
        </View>
        <Origin />
      </View>
    </Provider>
  )
}

export default App

registerRootComponent(App)
