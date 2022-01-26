import React from 'react'

import { MixOptions } from '@antv/g2plot'

import { createMetadata } from '@/__private__/storybook'

import { data, yearData } from '../__mocks__/mock.data'
import { MixPlot } from '../MixPlot'

import mdx from './MixPlot.docs.mdx'

const views: MixOptions['views'] = [
  {
    data: data.map(item => ({ type: item[0], value: item[1] })),
    region: { start: { x: 0, y: 0 }, end: { x: 0.5, y: 0.4 } },
    coordinate: {
      type: 'theta',
      cfg: { radius: 0.85 },
    },
    axes: {
      value: { title: { text: 'Drinks' }, grid: null, tickLine: null, line: null, ticks: [] },
    },
    geometries: [
      {
        type: 'interval',
        xField: '1',
        yField: 'value',
        colorField: 'type',
        mapping: {},
        adjust: { type: 'stack' },
      },
    ],
    interactions: [{ type: 'element-active' }, { type: 'association-highlight' }],
  },
  {
    data: [
      ...data.map(item => ({ type: item[0], gender: 'male', value: item[2] })),
      ...data.map(item => ({ type: item[0], gender: 'female', value: item[3] })),
    ],
    region: { start: { x: 0.5, y: 0 }, end: { x: 1, y: 0.45 } },
    axes: { value: false },
    geometries: [
      {
        type: 'interval',
        xField: 'type',
        yField: 'value',
        colorField: 'gender',
        mapping: {},
        adjust: { type: 'dodge', marginRatio: 0 },
      },
    ],
  },
  {
    data: yearData.map(item => ({ year: item[0], ordered: item[1] })),
    region: { start: { x: 0, y: 0.52 }, end: { x: 0.48, y: 1 } },
    axes: {
      year: {
        title: { text: 'Drinks ordered' },
      },
    },
    meta: {
      ordered: {
        min: 40,
        max: 90,
      },
    },
    geometries: [
      {
        type: 'area',
        xField: 'year',
        yField: 'ordered',
        mapping: {},
      },
      {
        type: 'line',
        xField: 'year',
        yField: 'ordered',
        mapping: {
          style: { lineWidth: 0.5 },
        },
      },
    ],
  },
  {
    data: [
      ...yearData.map(item => ({ year: item[0], gender: 'male', turnout: item[3] })),
      ...yearData.map(item => ({ year: item[0], gender: 'female', turnout: item[4] })),
    ],
    region: { start: { x: 0.52, y: 0.52 }, end: { x: 1, y: 1 } },
    axes: {
      year: {
        title: { text: 'Turnout by gender' },
      },
    },
    geometries: [
      {
        type: 'interval',
        xField: 'year',
        yField: 'turnout',
        colorField: 'gender',
        adjust: { type: 'dodge', marginRatio: 0 },
        mapping: {},
      },
    ],
    interactions: [{ type: 'element-active' }, { type: 'association-sibling-highlight' }],
  },
]

export function Playground() {
  return <MixPlot views={views} style={{ height: 500, padding: 'auto' }} />
}

export default createMetadata({
  title: 'Компоненты|/MixPlot',
  id: 'components/MixPlot',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
