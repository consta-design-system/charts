import React, { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  width?: string | number
  height?: string | number
}

export const Example: React.FC<Props> = ({ width, height, style, children, ...divProps }) => {
  const computedStyle: React.CSSProperties = {
    ...style,
    width,
    height,
  }

  return (
    <div {...divProps} style={computedStyle}>
      {children}
    </div>
  )
}
