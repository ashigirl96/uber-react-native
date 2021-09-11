import React, { VFC } from 'react'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { Provider } from 'react-redux'
import { store } from './store'
import { HomeScreen } from './Screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App: VFC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App

registerRootComponent(App)
