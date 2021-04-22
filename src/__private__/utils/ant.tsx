/* eslint-disable */
// @ts-nocheck

export const isType = (value: any, type: string): boolean => {
  const { toString } = {}
  return toString.call(value) === `[object ${type}]`
}

export const clone = (source: Object) => {
  if (!source) {
    return source
  }
  const target = {}

  for (const k in source) {
    target[k] = source[k]
  }
  return target
}

export const deepClone = (source: Object) => {
  if (!source) {
    return source
  }

  // @ts-ignore
  const target = new source.constructor()
  const getType = (n: Object) => {
    return Object.prototype.toString.call(n).slice(8, -1)
  }

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] =
        getType(source[key]) === 'Object' || getType(source[key]) === 'Array'
          ? deepClone(source[key])
          : source[key]
    }
  }

  return target
}

export const hasPath = (source: any, path: string[]) => {
  let current = source
  for (let i = 0; i < path.length; i += 1) {
    if (current?.[path[i]]) {
      current = current[path[i]]
    } else {
      current = undefined
      break
    }
  }
  return current
}

export const setPath = (source: object, path: string[], value: any) => {
  if (!source) {
    return source
  }
  let o = source
  path.forEach((key: string, idx: number) => {
    if (idx < path.length - 1) {
      o = o[key]
    } else {
      o[key] = value
    }
  })
  return source
}
