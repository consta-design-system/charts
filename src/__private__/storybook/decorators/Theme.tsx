import React from 'react'

import { presetGpnDark, presetGpnDefault, presetGpnDisplay, Theme } from '@consta/uikit/Theme'

type ThemeName = 'gpnDefault' | 'gpnDark' | 'gpnDisplay'
type Theme = {
  name: ThemeName
  default?: boolean
  color: string
}
type Props = {
  themeName: ThemeName
}

const getTheme = (themeName?: ThemeName) => {
  switch (themeName) {
    case 'gpnDefault':
      return presetGpnDefault
    case 'gpnDisplay':
      return presetGpnDisplay
    case 'gpnDark':
      return presetGpnDark
  }

  return presetGpnDisplay
}

export const listOfThemes: readonly Theme[] = [
  {
    name: 'gpnDefault',
    color: '#fff',
    default: true,
  },
  {
    name: 'gpnDark',
    color: '#22272b',
  },
  {
    name: 'gpnDisplay',
    color: '#002033',
  },
]

export const ThemeDecorator: React.FC<Props> = ({ children, themeName }) => {
  return (
    <Theme preset={getTheme(themeName)} style={{ background: 'var(--color-bg-default)' }}>
      {children}
    </Theme>
  )
}
