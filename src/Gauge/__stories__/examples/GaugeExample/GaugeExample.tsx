import React from 'react'

import { Gauge } from '@/Gauge'

export const GaugeExample = () => {
  const customFormatter = (data: Record<string, number> | undefined): string => {
    return data && typeof data.percent === 'number'
      ? `${(Number(data.percent) * 100).toFixed(0)}%`
      : ''
  }

  const options = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: '#04BC7F',
    },
    statistic: {
      content: {
        formatter: customFormatter,
        style: {
          color: 'var(--color-bg-default)',
          fontSize: '54px',
          fontWeight: 'bold',
        },
      },
    },
    axis: {
      subTickLine: {
        count: 3,
      },
      label: {
        style: {
          fontSize: 12,
        },
      },
    },
    indicator: {
      pin: {
        style: {
          r: 16,
          stroke: '#C4C4C4',
          lineWidth: 6,
        },
      },
      pointer: {
        style: {
          stroke: '#C4C4C4',
          lineWidth: 6,
        },
      },
    },
  }

  return <Gauge {...options} gaugeStyle={{ lineCap: 'round' }} />
}
