import { LegendCfg, MarkerCfg } from '@antv/g2/lib/interface';
import { Legend } from '@antv/g2plot/lib/types/legend';

type ColorNode = { [key: string]: string };

type Params<ColorObject> = Omit<LegendCfg, 'marker'> & {
  colors?: ColorObject;
  marker?: LegendCfg['marker'] | Array<LegendCfg['marker']> | MarkerCfg[];
};

export function getLegend<TYPE extends ColorNode>(
  params: Params<TYPE>,
): Legend {
  const {
    layout = 'vertical',
    position = 'top-right',
    offsetX,
    offsetY,
    colors,
    marker,
    ...otherParams
  } = params;
  return {
    layout,
    position,
    offsetY,
    offsetX,
    itemSpacing: layout === 'vertical' ? 4 : 8,
    // @ts-ignore
    marker:
      marker ??
      ((name) => ({
        symbol: () => {
          return [
            ['M', 8, 8],
            ['m', 0, 0],
            ['a', 4, 4, 0, 1, 0, 8, 0],
            ['a', 4, 4, 0, 1, 0, -8, 0],
          ];
        },
        spacing: 16,
        style: {
          fill: colors?.[name],
          fillOpacity: 1,
        },
      })),
    ...otherParams,
  };
}
