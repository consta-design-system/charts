import { View } from '@antv/g2';
import { PieOptions as G2plotPieProps, ShapeStyle } from '@antv/g2plot';
import React from 'react';

import { ContainerProps, Tooltip } from '##/hooks/useChart';

type ExcludeProps =
  | 'tooltip'
  | 'children'
  | 'theme'
  | 'data'
  | 'angleField'
  | 'colorField'
  | 'statistic';

type CSSStyle = Omit<
  Partial<CSSStyleDeclaration>,
  'opacity' | 'fontWeight' | 'lineHeight'
> & {
  opacity?: number;
  fontWeight?: string | number;
  lineHeight?: string | number;
};

export type StatisticText<ITEM> = {
  readonly style?: CSSStyle | ((datum: ITEM) => CSSStyle);
  readonly formatter?: (datum?: ITEM, data?: ITEM[]) => string;
  readonly rotate?: number;
  readonly offsetX?: number;
  readonly offsetY?: number;
  readonly customHtml?: (
    container: HTMLElement,
    view: View,
    datum?: ITEM,
    data?: ITEM[],
  ) => React.ReactNode;
};

export type Statistic<ITEM> = {
  readonly title?: false | StatisticText<ITEM>;
  readonly content?: false | StatisticText<ITEM>;
};

export type PieProps<ITEM> = Omit<G2plotPieProps, ExcludeProps> & {
  tooltip?: Tooltip<ITEM>;
  theme?: never;
  children?: never;
  data: ITEM[];
  areaStyle?: ((item: ITEM) => ShapeStyle) | ShapeStyle;
  angleField: keyof ITEM;
  colorField: keyof ITEM;
  seriesField?: keyof ITEM;
  statistic?: Statistic<ITEM>;
} & ContainerProps;

export type PieComponentType = <ITEM>(
  props: PieProps<ITEM>,
) => React.ReactElement | null;
