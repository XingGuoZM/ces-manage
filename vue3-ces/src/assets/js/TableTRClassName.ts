const tableRowClassName = (rowIndex:string) => {
  if ((parseInt(rowIndex) + 1) % 2 === 0) {
    return 'even'
  }
  return ''
}

export default tableRowClassName
