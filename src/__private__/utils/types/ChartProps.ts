import { ContainerProps, Tooltip } from '../../hooks/useChart'

export type ChartProps<Props> = Omit<Props, 'tooltip' | 'theme'> & {
  tooltip?: Tooltip<any>
  theme?: never
} & ContainerProps
