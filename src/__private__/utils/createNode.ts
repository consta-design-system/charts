import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom'

export const createNode = (children: React.ReactNode, type?: string) => {
  const mountPoint = document.createElement('div')
  if (type === 'tooltip') {
    mountPoint.className = 'g2-tooltip'
  }
  ReactDOM.render(children as React.ReactElement, mountPoint)
  return mountPoint
}
