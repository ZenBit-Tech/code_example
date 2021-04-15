import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { WalletScreen } from '../screens'

export type WalletStackParamList = {
  wallet: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<WalletStackParamList>()

export const WalletStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='wallet' component={WalletScreen} />
    </Stack.Navigator>
  )
}
