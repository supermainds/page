const imageModules = import.meta.glob('../assets/images/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const svgModules = import.meta.glob('../assets/svg/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

function isExternalAsset(path) {
  return (
    typeof path === 'string' &&
    (path.startsWith('http') || path.startsWith('/') || path.startsWith('data:'))
  )
}

function resolveAsset(path, modules, basePath) {
  if (!path || typeof path !== 'string') return undefined
  if (isExternalAsset(path)) return path

  return modules[`${basePath}/${path}`] || path
}

export function resolveImage(path) {
  return resolveAsset(path, imageModules, '../assets/images')
}

export function resolveSvg(path) {
  return resolveAsset(path, svgModules, '../assets/svg')
}
