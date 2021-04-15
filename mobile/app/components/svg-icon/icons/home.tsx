import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps): JSX.Element {
  const { color } = props
  return (
    <Svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        d='M9.657 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924C20.445 22 22 20.46 22 18.562V9.838a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L3.962 7.943A2.42 2.42 0 003 9.847v8.715C3 20.46 4.555 22 6.473 22h1.924c.685 0 1.241-.55 1.241-1.229'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export const Home = React.memo(SvgComponent)
