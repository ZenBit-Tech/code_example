import React from 'react'

import { SVGIcon } from '../svg-icon'
import { IconTypes } from '../svg-icon/icons'
import { color } from '../../theme/color'

interface TabBarIconProps {
  name: IconTypes
  focused: boolean
}

// todo add TabBarIcon to storybook?
export function TabBarIcon({ name, focused }: TabBarIconProps): JSX.Element {
  const iconColor = focused ? color.dim : color.background
  return <SVGIcon icon={name} color={iconColor} />
}
