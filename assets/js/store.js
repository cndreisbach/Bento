const rawStorage = window.localStorage

const store = {
  get: (key) => {
    const val = rawStorage.getItem(key)
    let out

    if (val) {
      try {
        out = JSON.parse(val)
      } catch (err) {
        out = val
      }
    }

    return out
  },

  set: (key, val) => {
    rawStorage.setItem(key, JSON.stringify(val))
  },

  remove: (key) => {
    rawStorage.removeItem(key)
  },
}

window.store = store
