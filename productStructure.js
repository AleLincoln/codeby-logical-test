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
  const numbers = {
    "PP": 1,
    "P": 1,
    "M": 1,
    "G": 1,
    "GG": 2,
    "XG": 3
  }

  const variantsSelector = products.reduce((acc, cv) => {
    const [color, size] = cv.split("-")
    acc[color] = { ...acc[color], [size]: numbers[size] }

    return acc
  }, {})
  return variantsSelector
}