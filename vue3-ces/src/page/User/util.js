import {sexs,intersts} from './config';

const formatSex=row=>{
  let info = ' '
  sexs.forEach(item=>{
    if(item.value===row.sex) info = item.label
  })
  return info
}
const formatInterst=row=>{
  let info = []
  intersts.forEach(item=>{
    row.interst.forEach(i=>{
      if(i===item.value) info.push(item.label)
    })
  })
  if(info.length===0) return ' '
  return info.join()
}

export {
  formatSex,
  formatInterst
}