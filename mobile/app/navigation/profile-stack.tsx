import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileScreen } from '../screens'

export type ProfileStackParamList = {
  profile: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<ProfileStackParamList>()

export const ProfileStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}
