import {sexs,intersts} from './config';

const formatSex=(row:any)=>{
  let info = ' '
  sexs.forEach(item=>{
    if(item.value===row.sex) info = item.label
  })
  return info
}
const formatInterst=(row:any)=>{
  let info:Array<string> = []
  intersts.forEach(item=>{
    row?.interst?.forEach((i:string)=>{
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