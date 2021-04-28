import { ContainerProps, Tooltip } from '../../hooks/useChart'
import { ChartRefOptions } from './ChartRefOptions'

export type ChartProps<Props> = Omit<Props, 'tooltip' | 'theme'> & {
  tooltip?: Tooltip
  theme?: never
} & ContainerProps &
  React.RefAttributes<HTMLDivElement> & { chartRef?: ChartRefOptions }
