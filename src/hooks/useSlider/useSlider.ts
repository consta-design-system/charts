import './UseSlider.css';

import { LineOptions } from '@antv/g2plot';
import { useThemeVars } from '@consta/uikit/useThemeVars';

type UseSlider = (props: LineOptions['slider']) => LineOptions['slider'];

const convertPixelToNumber = (pixels: string) => Number(pixels.split('px')[0]);

export const useSlider: UseSlider = (props) => {
  const themeVars = useThemeVars();
  const defaultSliderCfg = {
    height: convertPixelToNumber(themeVars.space['--space-l']),
    trendCfg: {
      smooth: false,
      isArea: false,
      backgroundStyle: {
        opacity: 1,
        fill: themeVars.color.primary['--color-bg-default'],
      },
      lineStyle: {
        stroke: themeVars.color.primary['--color-bg-border'],
        strokeOpacity: 1,
      },
    },
    backgroundStyle: {
      radius: 4,
    },
    handlerStyle: {
      width: 4,
      height: 24,
      radius: 2,
      fill: themeVars.color.primary['--color-bg-normal'],
      stroke: themeVars.color.primary['--color-bg-default'],
      highLightFill: '#56B9F2',
    },
    foregroundStyle: {
      fill: '#0BA5FF',
      opacity: 0.15,
    },
    textStyle: {
      fontSize: convertPixelToNumber(themeVars.size['--size-text-2xs']),
      fontWeight: 400,
      fontFamily: themeVars.font['--font-primary'],
      lineHeight: 12,
      stroke: '#002033',
      opacity: 0.6,
    },
  };

  const sliderCfg = typeof props !== 'boolean' ? props : {};
  return props ? { ...defaultSliderCfg, ...sliderCfg } : undefined;
};
