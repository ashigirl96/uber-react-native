import React, { VFC } from 'react'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { Provider } from 'react-redux'
import { store } from './store'
import { HomeScreen, MapScreen } from './Screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// 画面間をナビゲートするには、StackNavigatorを使用します。
// StackNavigatorは、コールスタックとまったく同じように機能します。
// ナビゲートする各画面は、スタックの一番上にプッシュされます。
// 戻るボタンを押すたびに、その画面はスタックの一番上からポップされます。

const App: VFC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false, // ヘッダがなくなる
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false, // ヘッダがなくなる
              }}
            />
            {/*<Stack.Screen name="Home" component={MapScreen} />*/}
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

registerRootComponent(App)
