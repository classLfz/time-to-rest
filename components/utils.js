const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const formatTime = (date) => {
  if (!date) return ''
  let dateFormat = new Date(date)
  if (!dateFormat) return ''
  const year = dateFormat.getFullYear()
  const month = dateFormat.getMonth() + 1
  const day = dateFormat.getDate()
  const hour = dateFormat.getHours()
  const minute = dateFormat.getMinutes()
  const second = dateFormat.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' '
    + [hour, minute, second].map(formatNumber).join(':')
}
