import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ChartScreen } from '../screens'

export type ChartStackParamList = {
  chart: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<ChartStackParamList>()

export const ChartStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='chart' component={ChartScreen} />
    </Stack.Navigator>
  )
}
