import { NavProfileIcon } from './nav-profile'
import { Chart } from './chart'
import { Search } from './search'
import { Home } from './home'
import { Wallet } from './wallet'

export const icons = {
  chart: Chart,
  search: Search,
  home: Home,
  wallet: Wallet,
  profile: NavProfileIcon,
}

export type IconTypes = keyof typeof icons
