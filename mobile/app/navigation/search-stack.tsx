import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchScreen } from '../screens'

export type SearchStackParamList = {
  search: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<SearchStackParamList>()

export const SearchStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='search' component={SearchScreen} />
    </Stack.Navigator>
  )
}
