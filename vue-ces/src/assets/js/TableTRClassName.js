const tableRowClassName = rowIndex => {
  if ((rowIndex + 1) % 2 === 0) {
    return 'even'
  }
  return ''
}

export default tableRowClassName
