import {
  Bullet as G2plotBullet,
  BulletOptions as G2plotBulletProps,
  ColorAttr,
} from '@antv/g2plot';
import { useForkRef } from '@consta/uikit/useForkRef';
import React, { useEffect, useImperativeHandle } from 'react';

import { useChart } from '##/hooks/useChart';
import { useChartTheme } from '##/hooks/useChartTheme';
import { getChart } from '##/utils/getChart';
import { ChartProps } from '##/utils/types/ChartProps';

export type BulletProps = ChartProps<G2plotBulletProps>;

type Bullet = (props: BulletProps) => React.ReactElement | null;

export const Bullet: Bullet = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props;

  const theme = useChartTheme();
  const { chart, container } = useChart(G2plotBullet, {
    ...(rest as Omit<BulletProps, 'label'>),
    color: rest.color as unknown as ColorAttr,
    theme,
  });

  useEffect(() => {
    getChart(chartRef, chart.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current]);

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }));

  return (
    <div
      style={style}
      ref={useForkRef([ref, container])}
      className={className}
    />
  );
});
