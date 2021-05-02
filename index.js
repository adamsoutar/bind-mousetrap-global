export default function addGlobalBinds (mousetrap) {
  const globals = new Set()
  const originalCB = mousetrap.prototype.stopCallback

  mousetrap.bindGlobal = (keys, cB, action) => {
    mousetrap.bind(keys, cB, action)

    if (Array.isArray(keys)) {
      for (const k of keys) globals.add(k)
    } else globals.add(keys)
  }

  mousetrap.unbindGlobal = (keys, action) => {
    mousetrap.unbind(keys, action)

    if (Array.isArray(keys)) {
      for (const k of keys) globals.delete(k)
    } else globals.delete(keys)
  }

  mousetrap.prototype.stopCallback = (...args) => {
    if (globals.has(args[2]) || globals.has(args[3])) return false
    return originalCB(...args)
  }
}
