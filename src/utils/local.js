export function setItem (key, value) {
  if (!key) {
    return false
  } else if (!value) {
    return false
  } else {
    localStorage.setItem(key, value)
    return true
  }
}

export function getItem (key) {
  if (!key) return false
  return localStorage.getItem(key)
}

export function removeItem(key) {
  if (!key) return false
  return localStorage.removeItem(key)
}