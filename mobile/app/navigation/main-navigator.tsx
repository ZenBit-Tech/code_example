/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { WalletStack } from './wallet-stack'
import { ChartStack } from './chart-stack'
import { SearchStack } from './search-stack'
import { HomeStack } from './home-stack'
import { ProfileStack } from './profile-stack'
import { TabBarIcon } from '../components/tabBarIcon'

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  chart: undefined
  search: undefined
  home: undefined
  wallet: undefined
  profile: undefined
}

type Focused = {
  focused: boolean
}

// Documentation: https://reactnavigation.org/docs/tab-based-navigation
const Tab = createBottomTabNavigator<PrimaryParamList>()

export function MainNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='chart'
        component={ChartStack}
        options={{
          tabBarIcon: ({ focused }: Focused) => (
            <TabBarIcon name='chart' focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='search'
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }: Focused) => (
            <TabBarIcon name='search' focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }: Focused) => (
            <TabBarIcon name='home' focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='wallet'
        component={WalletStack}
        options={{
          tabBarIcon: ({ focused }: Focused) => (
            <TabBarIcon name='wallet' focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='profile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }: Focused) => (
            <TabBarIcon name='profile' focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['chart']
export const canExit = (routeName: string): boolean =>
  exitRoutes.includes(routeName)
