import { BidirectionalBarOptions } from '@antv/g2plot';

import { ContainerProps, Tooltip } from '##/hooks/useChart';

type ExcludeProps = 'tooltip' | 'children' | 'theme';

export type BidirectionalBarProps<ITEM> = Omit<
  BidirectionalBarOptions,
  ExcludeProps
> & {
  tooltip?: Tooltip<ITEM>;
  theme?: never;
  children?: never;
} & ContainerProps;

export type BidirectionalBarComponentType = <ITEM>(
  props: BidirectionalBarProps<ITEM>,
) => React.ReactElement | null;
