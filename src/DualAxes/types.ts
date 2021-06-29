import { DualAxesOptions as G2plotDualAxesProps } from '@antv/g2plot'
import { Annotation } from '@antv/g2plot/src/types/annotation'

import { ContainerProps, Tooltip } from '@/__private__/hooks/useChart'

type ExcludeProps = 'tooltip' | 'children' | 'theme' | 'annotations'

export type DualAxesProps = Omit<G2plotDualAxesProps, ExcludeProps> & {
  tooltip?: Tooltip
  theme?: never
  children?: never
  annotations?: G2plotDualAxesProps['annotations'] & Annotation[]
} & ContainerProps

export type DualAxesComponentType = (props: DualAxesProps) => React.ReactElement | null
