import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { data, dataColor, dataSimple } from '../../../__mocks__/bigData.mock'
import { Scatter } from '../../../Scatter'

export function ScatterExample() {
  const vars = useThemeVars()
  return (
    <Scatter
      data={data}
      xField="change in female rate"
      appendPadding={30}
      yField="change in male rate"
      sizeField="pop"
      size={[4, 30]}
      shape="circle"
      colorField="continent"
      legend={{
        layout: 'horizontal',
        position: 'top-left',
        marker: {
          symbol: 'square',
        },
      }}
      meta={{
        pop: { alias: 'население' },
        'change in female rate': { alias: 'занятость женщин' },
        'change in male rate': { alias: 'занятость мужчин' },
        continent: { alias: 'континент' },
      }}
      pointStyle={{
        fillOpacity: 0.6,
        stroke: null,
      }}
      xAxis={{
        grid: {
          line: {
            style: {
              stroke: vars.color.primary['--color-bg-system'],
            },
          },
        },
        line: {
          style: {
            stroke: vars.color.primary['--color-bg-system'],
          },
        },
      }}
    />
  )
}

export function ScatterExampleSimple() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataSimple}
      xField="x"
      yField="y"
    />
  )
}

export function ScatterExampleColor() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      color={'#ffd500'}
      size={5}
      shape="circle"
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExampleColorField() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a']}
      size={5}
      shape="circle"
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExampleSize() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      size={20}
      shape="circle"
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExampleSizeField() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a']}
      size={[4, 20]}
      sizeField="ufo"
      shape="circle"
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExampleShape() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      shape="triangle"
      size={5}
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExampleShapeField() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      shapeField="place"
      shape={['circle', 'square', 'triangle']}
      size={5}
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExamplePseudo() {
  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a']}
      size={[4, 20]}
      sizeField="ufo"
      shape="circle"
      pointStyle={{
        fillOpacity: 1,
      }}
      meta={{
        temperature: {
          alias: 'Воздух',
          formatter: v => {
            return `${v}°`
          },
        },
        ufo: {
          alias: 'Видели НЛО',
          formatter: v => {
            return `${v} раз`
          },
        },
        place: { alias: 'Город' },
      }}
    />
  )
}
