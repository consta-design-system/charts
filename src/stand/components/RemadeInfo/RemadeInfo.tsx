import './RemadeInfo.css';

import { Informer } from '@consta/uikit/Informer';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/stand/bem';

const cnRemadeInfo = cn('RemadeInfo');

export const RemadeInfo: React.FC<{
  apiUrl: string;
  commponentName: string;
}> = (props) => {
  const { commponentName, apiUrl } = props;
  return (
    <Informer className={cnRemadeInfo()} status="system" view="bordered">
      <Text size="m" view="primary" lineHeight="m">
        Это компонент{' '}
        <Text as="span" weight="bold">
          {commponentName}
        </Text>{' '}
        из библиотеки{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href="https://g2plot.antv.vision/en"
          target="_blank"
        >
          G2Plot
        </Text>
        , к нему добавили тематизацию из{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href="https://consta.design/"
          target="_blank"
        >
          дизайн-системы Consta
        </Text>{' '}
        и полностью проксировали API.
      </Text>
      <Text
        size="m"
        view="primary"
        lineHeight="m"
        style={{ marginTop: 'var(--space-m)' }}
      >
        Здесь описаны только основные свойства, подробности — в{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href={apiUrl}
          target="_blank"
        >
          документации G2Plot
        </Text>
        .
      </Text>
    </Informer>
  );
};

export const RemadeTableInfo: React.FC<{ apiUrl: string }> = (props) => {
  const { apiUrl } = props;
  return (
    <Informer className={cnRemadeInfo()} status="system" view="bordered">
      <Text size="m" view="primary" lineHeight="m">
        Здесь описаны только основные свойства компонента.{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href={apiUrl}
          target="_blank"
        >
          Посмотреть все свойства
        </Text>
      </Text>
    </Informer>
  );
};
