import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { data, dataSingle } from '../../../__mocks__/mock.data';
import { Bullet } from '../../../Bullet';

export function BulletExample() {
  const vars = useThemeVars();

  return (
    <Bullet
      data={data}
      measureField="measures"
      rangeField="ranges"
      targetField="target"
      xField="title"
      color={{
        target: vars.color.primary['--color-bg-tone'],
        range: vars.color.primary['--color-bg-secondary'],
        measure: [
          vars.color.primary['--color-bg-success'],
          vars.color.primary['--color-bg-caution'],
          vars.color.primary['--color-bg-warning'],
          vars.color.primary['--color-bg-alert'],
        ],
      }}
      bulletStyle={{
        range: {
          fillOpacity: 1,
        },
        measure: {
          fillOpacity: 1,
        },
      }}
    />
  );
}

export function BulletExampleSingle() {
  const vars = useThemeVars();

  return (
    <Bullet
      style={{
        height: '140px',
      }}
      data={dataSingle}
      color={{
        target: vars.color.primary['--color-bg-tone'],
        range: vars.color.primary['--color-bg-secondary'],
        measure: [
          vars.color.primary['--color-bg-success'],
          vars.color.primary['--color-bg-caution'],
          vars.color.primary['--color-bg-warning'],
          vars.color.primary['--color-bg-alert'],
        ],
      }}
      bulletStyle={{
        range: {
          fillOpacity: 1,
        },
        measure: {
          fillOpacity: 1,
        },
      }}
      measureField="mesures"
      rangeField="range"
      targetField="target"
      xField="title"
    />
  );
}

export function BulletExampleLabel() {
  const vars = useThemeVars();

  return (
    <Bullet
      style={{
        height: '140px',
        marginBottom: 'var(--space-l)',
      }}
      data={dataSingle}
      color={{
        target: vars.color.primary['--color-bg-tone'],
        range: vars.color.primary['--color-bg-secondary'],
        measure: [
          vars.color.primary['--color-bg-success'],
          vars.color.primary['--color-bg-caution'],
          vars.color.primary['--color-bg-warning'],
          vars.color.primary['--color-bg-alert'],
        ],
      }}
      bulletStyle={{
        range: {
          fillOpacity: 1,
        },
        measure: {
          fillOpacity: 1,
        },
      }}
      measureField="mesures"
      rangeField="range"
      targetField="target"
      xField="title"
    />
  );
}

export function BulletExampleNoAxys() {
  const vars = useThemeVars();

  return (
    <Bullet
      style={{
        height: '100px',
      }}
      data={dataSingle}
      measureField="mesures"
      rangeField="range"
      targetField="target"
      xField="title"
      color={{
        target: vars.color.primary['--color-bg-tone'],
        range: vars.color.primary['--color-bg-secondary'],
        measure: [
          vars.color.primary['--color-bg-success'],
          vars.color.primary['--color-bg-caution'],
          vars.color.primary['--color-bg-warning'],
          vars.color.primary['--color-bg-alert'],
        ],
      }}
      bulletStyle={{
        range: {
          fillOpacity: 1,
        },
        measure: {
          fillOpacity: 1,
        },
      }}
      yAxis={false}
    />
  );
}
