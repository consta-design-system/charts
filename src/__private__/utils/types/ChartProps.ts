import { ContainerProps, Tooltip } from '../../hooks/useChart'
import { ChartRefOptions } from './ChartRefOptions'

export type ChartProps<Props> = Omit<Props, 'tooltip'> & {
  tooltip?: Tooltip
} & ContainerProps &
  React.RefAttributes<HTMLDivElement> & { chartRef?: ChartRefOptions }
