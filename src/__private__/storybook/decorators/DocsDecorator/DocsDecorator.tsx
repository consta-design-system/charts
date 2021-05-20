import React from 'react'

import { presetGpnDefault, Theme } from '@consta/uikit/Theme'
import { DocsContainer } from '@storybook/addon-docs/dist/blocks'

import { cn } from '@/__private__/utils/bem'

import './DocsDecorator.css'

type Props = React.ComponentProps<typeof DocsContainer>

const cnDocsDecorator = cn('DocsDecorator')

export const DocsDecorator: React.FC<Props> = ({ context, children }) => (
  <Theme preset={presetGpnDefault} className={cnDocsDecorator()}>
    <DocsContainer context={context}>
      <div className={cnDocsDecorator('Wrapper')}>{children}</div>
    </DocsContainer>
  </Theme>
)
