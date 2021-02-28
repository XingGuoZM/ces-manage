const ChangeTime = (val:string) => {
  const date = new Date(val)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = (n:number) => {
  let str = n.toString()
  return str[1] ? str[1] : '0' + str[1]
}
export default ChangeTime
