const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  const obj = {}
  const obj2 ={}

  const arrc = products.map((item) => item.split('-')[0])
  const filteredColors = arrc.filter((item, index) => arrc.indexOf(item) === index)

  const arrs = products.map((item) => item.split('-')[1])
  const filteredSizes = arrs.filter((item, index) => arrs.indexOf(item) === index)


  


  filteredColors.forEach((color) => {
    filteredSizes.forEach((size)=>{
    obj2[size] = products.filter((item) => item.match(color) && item.match(size)).length
  })

    obj[color] = obj2

  })

  return obj

}