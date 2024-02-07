export const formatNumber = (value) => {
  var inputValue = Number(value).toString()
  inputValue = inputValue.replace(/[^0-9.]/g, "")
  var decimalIndex = inputValue.indexOf(".")
  if (decimalIndex !== -1 && inputValue.length - decimalIndex > 2) {
    inputValue = inputValue.slice(0, decimalIndex + 2)
  }
  return parseFloat(inputValue)
}
