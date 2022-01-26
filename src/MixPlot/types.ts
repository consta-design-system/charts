import { MixOptions } from '@antv/g2plot'

import { ContainerProps, Tooltip } from '@/__private__/hooks/useChart'

type ExcludeProps = 'tooltip' | 'children' | 'theme'

export type MixPlotProps<ITEM> = Omit<MixOptions, ExcludeProps> & {
  tooltip?: Tooltip<ITEM>
  theme?: never
  children?: never
} & ContainerProps

export type MixPlotComponentType = <ITEM>(props: MixPlotProps<ITEM>) => React.ReactElement | null
