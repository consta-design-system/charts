import { LegendCfg } from '@antv/g2/lib/interface'
import { Legend } from '@antv/g2plot/lib/types/legend'

type ColorNode = { [key: string]: string }

type Params<ColorObject> = {
  colors?: ColorObject
} & LegendCfg

export function getLegend<TYPE extends ColorNode>(params: Params<TYPE>): Legend {
  const { layout = 'vertical', position = 'top-right', offsetX, offsetY, colors } = params
  return {
    layout,
    position,
    offsetY,
    offsetX,
    // @ts-ignore
    marker: name => ({
      symbol: () => {
        return [
          ['M', 8, 8],
          ['m', -4, 0],
          ['a', 4, 4, 0, 1, 0, 8, 0],
          ['a', 4, 4, 0, 1, 0, -8, 0],
        ]
      },
      spacing: 4,
      style: {
        fill: colors?.[name],
        fillOpacity: 1,
      },
    }),
  }
}
