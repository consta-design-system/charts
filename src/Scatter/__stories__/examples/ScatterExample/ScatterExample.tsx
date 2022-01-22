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
      color={[
        vars.color.primary['--color-bg-success'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-caution'],
      ]}
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
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataSimple}
      color={vars.color.primary['--color-bg-success']}
      xField="x"
      yField="y"
    />
  )
}

export function ScatterExampleColor() {
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      color={vars.color.primary['--color-bg-warning']}
      size={5}
      shape="circle"
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExampleColorField() {
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={[
        vars.color.primary['--color-bg-success'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-caution'],
      ]}
      size={5}
      shape="circle"
      pointStyle={{
        fillOpacity: 1,
      }}
    />
  )
}

export function ScatterExampleSize() {
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      color={vars.color.primary['--color-bg-normal']}
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
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={[
        vars.color.primary['--color-bg-success'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-caution'],
      ]}
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
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      color={vars.color.primary['--color-bg-normal']}
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
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      color={vars.color.primary['--color-bg-normal']}
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
  const vars = useThemeVars()

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={data}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={[
        vars.color.primary['--color-bg-success'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-caution'],
        vars.color.primary['--color-bg-alert'],
        vars.color.primary['--color-bg-normal'],
        vars.color.primary['--color-bg-brand'],
      ]}
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
