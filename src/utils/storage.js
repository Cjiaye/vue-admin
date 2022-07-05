export function setItem(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取token
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
