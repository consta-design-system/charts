import {
  Radar as G2plotRadar,
  RadarOptions as G2plotRadarProps,
} from '@antv/g2plot';
import { useForkRef } from '@consta/uikit/useForkRef';
import React, { useEffect, useImperativeHandle } from 'react';

import { useChart } from '##/hooks/useChart';
import { useChartTheme } from '##/hooks/useChartTheme';
import { getChart } from '##/utils/getChart';
import { ChartProps } from '##/utils/types/ChartProps';

export type RadarProps = Omit<ChartProps<G2plotRadarProps>, 'label'>;

type Radar = (props: RadarProps) => React.ReactElement | null;

export const Radar: Radar = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props;
  const theme = useChartTheme();
  const { chart, container } = useChart(G2plotRadar, { ...rest, theme });

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
