import React from 'react'
import { TextStyle, View, ViewStyle } from 'react-native'
import { Header, Text, Screen, Wallpaper, SVGIcon } from '../../components'
import { color, spacing } from '../../theme'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const BOLD: TextStyle = { fontWeight: 'bold' }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5,
}

export const SearchScreen = () => {
  return (
    <View testID='DemoScreen' style={FULL}>
      <Wallpaper />
      <Screen
        style={CONTAINER}
        preset='scroll'
        backgroundColor={color.transparent}
      >
        <Header
          headerTx='demoScreen.howTo'
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Text preset='header2' tx='demoScreen.title' />
        <SVGIcon icon='search' />
        <Text preset='header2' tx='demoScreen.title' />
      </Screen>
    </View>
  )
}
