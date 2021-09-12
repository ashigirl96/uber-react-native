import React, { VFC } from 'react'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { Provider } from 'react-redux'
import { store } from './store'
import { HomeScreen } from './Screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

const App: VFC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

registerRootComponent(App)
