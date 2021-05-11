import { LineProps } from './Line'

export const withDefaultProps = <Item>(props: LineProps<Item>): LineProps<Item> => {
  return {
    ...props,
    legend: {
      ...props.legend,
    },
    xAxis: {
      label: {
        style: {
          fill: 'red',
          lineHeight: 100,
        },
      },
    },
  }
}
