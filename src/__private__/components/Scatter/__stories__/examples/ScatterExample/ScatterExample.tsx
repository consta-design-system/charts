import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { getLegend } from '@/__private__/utils/legend'

import { data, dataColor, dataSimple } from '../../../__mocks__/bigData.mock'
import { Scatter } from '../../../Scatter'

export function ScatterExample() {
  const vars = useThemeVars()

  const colors: Record<string, string> = {
    Asia: vars.color.primary['--color-bg-success'],
    Americas: vars.color.primary['--color-bg-warning'],
    Oceania: vars.color.primary['--color-bg-caution'],
    Europe: vars.color.primary['--color-bg-alert'],
    Africa: vars.color.primary['--color-bg-normal'],
  }

  return (
    <Scatter
      data={data}
      xField="change in female rate"
      appendPadding={30}
      yField="change in male rate"
      sizeField="pop"
      color={Object.keys(colors).map(key => colors[key])}
      legend={getLegend({ position: 'top-left', layout: 'horizontal' })}
      renderer="svg"
      size={[4, 30]}
      shape="circle"
      colorField="continent"
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

  const colors: Record<string, string> = {
    Тмутаракань: vars.color.primary['--color-bg-success'],
    Бобруйск: vars.color.primary['--color-bg-warning'],
    Урюпинск: vars.color.primary['--color-bg-caution'],
  }

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={Object.keys(colors).map(key => colors[key])}
      legend={getLegend({ position: 'top-left', layout: 'horizontal' })}
      renderer="svg"
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

  const colors: Record<string, string> = {
    Тмутаракань: vars.color.primary['--color-bg-success'],
    Бобруйск: vars.color.primary['--color-bg-warning'],
    Урюпинск: vars.color.primary['--color-bg-caution'],
  }

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={Object.keys(colors).map(key => colors[key])}
      legend={getLegend({ position: 'top-left', layout: 'horizontal' })}
      renderer="svg"
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

  const colors: Record<string, string> = {
    Тмутаракань: vars.color.primary['--color-bg-success'],
    Бобруйск: vars.color.primary['--color-bg-warning'],
    Урюпинск: vars.color.primary['--color-bg-caution'],
  }

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={dataColor}
      color={Object.keys(colors).map(key => colors[key])}
      legend={getLegend({
        position: 'top-left',
        layout: 'horizontal',
        marker: [{ symbol: 'circle' }, { symbol: 'square' }, { symbol: 'triangle' }],
      })}
      renderer="svg"
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

  const colors: Record<string, string> = {
    Asia: vars.color.primary['--color-bg-success'],
    Americas: vars.color.primary['--color-bg-warning'],
    Oceania: vars.color.primary['--color-bg-caution'],
    Europe: vars.color.primary['--color-bg-alert'],
    Africa: vars.color.primary['--color-bg-normal'],
  }

  return (
    <Scatter
      style={{ marginBottom: 'var(--space-l)', width: 300, height: 200 }}
      data={data}
      xField="temperature"
      yField="ufo"
      colorField="place"
      color={Object.keys(colors).map(key => colors[key])}
      legend={getLegend({ position: 'top-left', layout: 'horizontal' })}
      renderer="svg"
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
