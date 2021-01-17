const ChangeTimeNYR = val => {
  const time = new Date(val)
  const handleLength = function (val) {
    if (val < 10) return '0' + val
    return val
  }
  return `${time.getFullYear()}-${handleLength(time.getMonth() + 1)}-${handleLength(time.getDate())}`
}

export default ChangeTimeNYR
