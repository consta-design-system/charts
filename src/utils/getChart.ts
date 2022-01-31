import { isFunction } from '@antv/util'

import { ChartRefOptions } from '../__private__/utils/types/ChartRefOptions'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getChart = (chartRef: ChartRefOptions | undefined, chart: any) => {
  if (!chartRef) {
    return
  }
  if (isFunction(chartRef)) {
    chartRef(chart)
  } else {
    chartRef.current = chart
  }
}
