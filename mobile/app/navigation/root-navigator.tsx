/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your MainNavigator) which the user
 * will use once logged in.
 */
import React from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import { MainNavigator } from './main-navigator'
import { color } from '../theme/color'

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  const defaultTheme = {
    dark: false,
    colors: {
      primary: color.primary,
      background: color.primary,
      card: color.primary,
      text: color.text,
      border: color.primary,
      notification: color.primary,
    },
  }

  return (
    <NavigationContainer {...props} ref={ref} theme={defaultTheme}>
      <MainNavigator />
    </NavigationContainer>
  )
})

RootNavigator.displayName = 'RootNavigator'
