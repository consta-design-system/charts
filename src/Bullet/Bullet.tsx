import React, { useEffect, useImperativeHandle } from 'react'

import { Bullet as G2plotBullet, BulletOptions as G2plotBulletProps, ColorAttr } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { useChartTheme } from '@/__private__/hooks/useChartTheme'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type BulletProps = ChartProps<Omit<G2plotBulletProps, 'label'>>

type Bullet = (props: BulletProps) => React.ReactElement | null

export const Bullet: Bullet = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props

  const theme = useChartTheme()
  const { chart, container } = useChart(G2plotBullet, {
    ...rest,
    color: (rest.color as unknown) as ColorAttr,
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
