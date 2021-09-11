import React, { VFC } from 'react'
import { StyleSheet } from 'react-native'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { Provider } from 'react-redux'
import { store } from './store'
import { HomeScreen } from './Screens/HomeScreen'

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

const App: VFC = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

export default App

registerRootComponent(App)
