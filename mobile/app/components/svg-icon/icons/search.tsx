import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps): JSX.Element {
  const { color } = props
  return (
    <Svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M11.767 20.755a8.989 8.989 0 100-17.977 8.989 8.989 0 000 17.977zM18.018 18.485L21.542 22'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export const Search = React.memo(SvgComponent)
