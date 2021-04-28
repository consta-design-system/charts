import React, { useEffect, useImperativeHandle } from 'react'

import {
  Waterfall as G2plotWaterfall,
  WaterfallOptions as G2plotWaterfallProps,
} from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'
import { useThemeVars } from '@consta/uikit/useThemeVars'

import { useChart } from '@/__private__/hooks/useChart'
import { getChartTheme } from '@/__private__/hooks/useChartTheme'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

import { getDefaultProps } from './helpers'

export type WaterfallProps = Omit<ChartProps<G2plotWaterfallProps>, 'color' | 'label'>

type Waterfall = (props: WaterfallProps) => React.ReactElement | null

export const Waterfall: Waterfall = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props

  const themeVars = useThemeVars()
  const theme = getChartTheme(themeVars)
  const chartProps = getDefaultProps(rest, themeVars)
  const { chart, container } = useChart(G2plotWaterfall, { ...chartProps, theme })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
