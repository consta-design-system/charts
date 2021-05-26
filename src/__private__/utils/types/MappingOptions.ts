import { ShapeStyle } from '@antv/g2plot'

export type MappingOptions<ITEM> = {
  readonly color?: string | string[] | ((item: ITEM) => string)
  readonly shape?: string | string[] | ((item: ITEM) => string)
  readonly size?: number | [number, number] | ((item: ITEM) => number)
  readonly style?: ShapeStyle | ((item: ITEM) => ShapeStyle)
  readonly tooltip?: (
    datum: ITEM
  ) => {
    name: string
    value: string | number
  }
}
