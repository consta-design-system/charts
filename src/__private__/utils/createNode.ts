import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom'

export const createNode = (children: React.ReactNode, type?: string) => {
  const monthPoint = document.createElement('div')
  if (type === 'tooltip') {
    monthPoint.className = 'g2-tooltip'
  }
  ReactDOM.render(children as React.ReactElement, monthPoint)
  return monthPoint
}
