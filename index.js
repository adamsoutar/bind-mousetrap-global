export default function addGlobalBinds (Mousetrap) {
  const globals = new Set()
  const originalCB = Mousetrap.protoype.stopCallback

  Mousetrap.prototype.bindGlobal = (keys, cB, action) => {
    this.bind(keys, cB, action)

    if (Array.isArray(keys)) {
      for (const k of keys) globals.add(k)
    } else globals.add(keys)
  }

  Mousetrap.prototype.unbindGlobal = (keys, action) => {
    this.unbind(keys, action)

    if (Array.isArray(keys)) {
      for (const k of keys) globals.delete(k)
    } else globals.delete(keys)
  }

  Mousetrap.prototype.stopCallback = (...args) => {
    if (globals.has(args[2]) || globals.has(args[3])) return false
    return originalCB(...args)
  }
}
