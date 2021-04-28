import { LineProps } from './Line'

export const withDefaultProps = <Item>(props: LineProps<Item>): LineProps<Item> => {
  return {
    ...props,
    legend: {
      animate: true,
      ...props.legend,
    },
  }
}
