import * as React from 'react'
import { IconProps } from './icon.props'
import { icons } from './icons'
import { color as colors } from '../../theme'

export function SVGIcon({
  icon,
  size = 20,
  width,
  height,
  color = colors.background,
  ...props
}: IconProps): JSX.Element {
  const Icon = icons[icon] || icons.profile

  return (
    <Icon
      width={width || size}
      height={height || size}
      color={color}
      {...props}
    />
  )
}
