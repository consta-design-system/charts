import React, { useEffect, useImperativeHandle } from 'react'

import { Liquid as G2plotLiquid, LiquidOptions as G2plotLiquidProps } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'
import { useThemeVars } from '@consta/uikit/useThemeVars'

import { useChart } from '@/__private__/hooks/useChart'
import { getChartTheme } from '@/__private__/hooks/useChartTheme'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

import { withDefaultProps } from './helpers'

export type LiquidProps = Omit<ChartProps<G2plotLiquidProps>, 'color' | 'label'>

type Liquid = (props: LiquidProps) => React.ReactElement | null

export const Liquid: Liquid = React.forwardRef((props, ref) => {
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
  const chartProps = withDefaultProps(rest, themeVars)

  const { chart, container } = useChart(G2plotLiquid, {
    ...chartProps,
    theme,
  })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
