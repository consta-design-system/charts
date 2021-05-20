import React from 'react'

import { IconAlert } from '@consta/uikit/IconAlert'
import { Informer } from '@consta/uikit/Informer'
import { Text } from '@consta/uikit/Text'

import { cn } from '@/__private__/storybook/bem'

import './RemadeInfo.css'

const cnRemadeInfo = cn('RemadeInfo')

export const RemadeInfo: React.FC<{ apiUrl: string; commponentName: string }> = props => {
  const { commponentName, apiUrl } = props
  return (
    <Informer className={cnRemadeInfo()} icon={IconAlert} status="system">
      <Text>
        Компонент{' '}
        <Text as="span" weight="bold">
          {commponentName}
        </Text>{' '}
        взят из{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href="https://g2plot.antv.vision"
          target="_blank"
        >
          G2Plot
        </Text>
        , добавлена тематизация из{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href="https://consta.gazprom-neft.ru/"
          target="_blank"
        >
          Consta
        </Text>{' '}
        и полностью проксировано{' '}
        <Text className={cnRemadeInfo('Link')} as="a" view="link" href={apiUrl} target="_blank">
          Api
        </Text>
      </Text>
    </Informer>
  )
}
