import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function SvgComponent(props: SvgProps): JSX.Element {
  const { color } = props
  return (
    <Svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M15.716 16.223h-7.22M15.716 12.037h-7.22M11.251 7.86H8.496'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        clipRule='evenodd'
        d='M15.909 2.75l-7.69.004C5.46 2.77 3.75 4.587 3.75 7.357v9.196c0 2.784 1.722 4.607 4.506 4.607l7.69-.003c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.724-4.607-4.508-4.607z'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export const NavProfileIcon = React.memo(SvgComponent)
