/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode, useEffect, useRef } from 'react'

import {
  G2,
  Options as G2PlotConfig,
  Plot,
  TooltipOptions as G2PlotTooltipOptions,
} from '@antv/g2plot'
import { isEqual } from '@antv/util'

import { clone, hasPath, isType, setPath } from '@/__private__/utils/ant'
import { createNode } from '@/__private__/utils/createNode'
import { ChartRefOptions } from '@/__private__/utils/types/ChartRefOptions'

export type ContainerProps = {
  style?: React.CSSProperties
  className?: string
  onReady?: (chart: G2PlotConfig) => void
  onEvent?: (chart: G2PlotConfig, event: G2.Event) => void
  chartRef?: ChartRefOptions
} & React.RefAttributes<HTMLDivElement>

export type Tooltip<ITEM = unknown> =
  | (Omit<G2PlotTooltipOptions, 'customContent'> & {
      customContent?: (title: string, data: ITEM[]) => ReactNode | string | void
      container?: ReactNode
    })
  | false

export type Options = Omit<G2PlotConfig, 'tooltip' | 'data' | 'yAxis'> & {
  tooltip?: Tooltip<any>
  data?: any
  yAxis?: G2PlotConfig['yAxis'] | Array<G2PlotConfig['yAxis']>
  [key: string]: any
}

export type Base = Plot<any> & {
  __proto__?: any
}

export function useChart<T extends Base, U extends Options>(ChartClass: any, config: U) {
  const chart = useRef<T>()
  const chartOptions = useRef<U>()
  const container = useRef<HTMLDivElement>(null)
  const { onReady, onEvent } = config

  /**
   * Get data base64
   *
   * @param {string} type A DOMString indicating the image format. The default format type is image/png.
   * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
   */
  const toDataURL = (type = 'image/png', encoderOptions?: number) => {
    return chart.current?.chart.canvas.cfg.el.toDataURL(type, encoderOptions)
  }

  /**
   * Download Iamge
   *
   * @param {string} name A name of image
   * @param {string} type A DOMString indicating the image format. The default format type is image/png.
   * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
   */
  const downloadImage = (
    name = 'download',
    type = 'image/png',
    encoderOptions?: number
  ): string => {
    let imageName = name
    if (name.indexOf('.') === -1) {
      imageName = `${name}.${type.split('/')[1]}`
    }
    const base64 = chart.current?.chart.canvas.cfg.el.toDataURL(type, encoderOptions)
    let a: HTMLAnchorElement | null = document.createElement('a')
    a.href = base64
    a.download = imageName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    a = null
    return imageName
  }

  const reactDomToString = (source: U, path: string[], type?: string) => {
    const statisticCustomHtml = hasPath(source, path)
    setPath(source, path, (...arg: any[]) => {
      const statisticDom = isType(statisticCustomHtml, 'Function')
        ? statisticCustomHtml(...arg)
        : statisticCustomHtml
      if (
        isType(statisticDom, 'String') ||
        isType(statisticDom, 'Number') ||
        isType(statisticDom, 'HTMLDivElement')
      ) {
        return statisticDom
      }
      return createNode(statisticDom, type)
    })
  }

  const processConfig = () => {
    if (hasPath(config, ['statistic', 'content', 'customHtml'])) {
      reactDomToString(config, ['statistic', 'content', 'customHtml'])
    }
    if (hasPath(config, ['statistic', 'title', 'customHtml'])) {
      reactDomToString(config, ['statistic', 'title', 'customHtml'])
    }
    // tooltip
    if (typeof config.tooltip === 'object') {
      if (hasPath(config, ['tooltip', 'container'])) {
        reactDomToString(config, ['tooltip', 'container'], 'tooltip')
      }
      if (hasPath(config, ['tooltip', 'customContent'])) {
        reactDomToString(config, ['tooltip', 'customContent'], 'tooltip')
      }
    }
  }

  useEffect(() => {
    if (chart.current && !isEqual(chartOptions.current, config)) {
      let changeData = false
      if (chartOptions.current) {
        const {
          data: currentData,
          value: currentValue,
          percent: currentPercent,
          ...currentConfig
        } = chartOptions.current
        const { data: inputData, value: inputValue, percent: inputPercent, ...inputConfig } = config
        changeData = isEqual(currentConfig, inputConfig)
      }
      if (changeData) {
        let changeType = 'data'
        const typeMaps = ['percent']
        const currentKeys = Object.keys(config)
        typeMaps.forEach((type: string) => {
          if (currentKeys.includes(type)) {
            changeType = type
          }
        })
        chart.current.changeData(config?.[changeType] || [])
      } else {
        processConfig()
        chart.current.update(config)
      }
      chartOptions.current = { ...config }
    }
  }, [config])

  useEffect(() => {
    if (!container.current) {
      return () => null
    }
    processConfig()
    const chartInstance: T = new (ChartClass as any)(container.current, {
      ...config,
    })

    ChartClass.prototype.toDataURL = (type?: string, encoderOptions?: number) => {
      return toDataURL(type, encoderOptions)
    }
    ChartClass.prototype.downloadImage = (
      name?: string,
      type?: string,
      encoderOptions?: number
    ) => {
      return downloadImage(name, type, encoderOptions)
    }
    chartInstance.render()
    if (!chartOptions.current) {
      chartOptions.current = { ...config }
    }
    chart.current = clone(chartInstance) as T
    if (onReady) {
      onReady(chartInstance)
    }
    const handler = (event: G2.Event) => {
      if (onEvent) {
        onEvent(chartInstance, event)
      }
    }
    chartInstance.on('*', handler)

    return () => {
      if (chart.current) {
        chart.current.destroy()
        chart.current.off('*', handler)
        chart.current = undefined
      }
    }
  }, [])

  return {
    chart,
    container,
  }
}
