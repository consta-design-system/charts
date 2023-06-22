import { BidirectionalBar as BidirectionalBarPlot } from '@antv/g2plot';
import { useForkRef } from '@consta/uikit/useForkRef';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

import { useChart } from '##/hooks/useChart';
import { useChartTheme } from '##/hooks/useChartTheme';
import { getChart } from '##/utils/getChart';

import { BidirectionalBarComponentType } from './types';

export const BidirectionalBar: BidirectionalBarComponentType = forwardRef(
  (props, ref) => {
    const {
      chartRef,
      style = {
        height: 'inherit',
      },
      className,
      ...otherProps
    } = props;

    const theme = useChartTheme();
    const { chart, container } = useChart(BidirectionalBarPlot, {
      ...otherProps,
      theme,
    });

    useEffect(() => {
      getChart(chartRef, chart.current);
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
  },
);
