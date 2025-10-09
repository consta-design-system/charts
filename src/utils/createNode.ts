import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

export const createNode = (children: React.ReactNode, type?: string) => {
  const monthPoint = document.createElement('div');
  if (type === 'tooltip') {
    monthPoint.className = 'g2-tooltip';
  }

  if (createRoot) {
    const container = createRoot(monthPoint);
    container.render(children);
  } else if (ReactDOM && ReactDOM.render) {
    ReactDOM.render(children as React.ReactElement, monthPoint);
  }
  return monthPoint;
};
