let products = [
  { name: "Product 1", description: "Lorem ipsum", unitPrice: 100, discount: false, rate: 10 },
  { name: "Product 2", description: "Lorem ipsum", unitPrice: 210, discount: true, rate: 20 },
  { name: "Product 3", description: "Lorem ipsum", unitPrice: 320, discount: false, rate: 15 },
  { name: "Product 5", description: "Lorem ipsum", unitPrice: 520, discount: true, rate: 0 }
]


// productların her birini ekrana teker teker yazan kodu yazınız
// unitPrice'ı 250'den düşük olan productları array olarak yazdır
// discount:true olan her product için rate kadar % indirim uygulayınız.



products.map((product) => {
  console.log(product.name)
})


let filteredResult = products.filter((product) => {
  return product.unitPrice < 250
})

console.log(filteredResult)


let result = products.map((product) => {
  if (product.discount === true) {
    return { ...product, unitPrice: product.unitPrice - ((product.unitPrice * product.rate) / 100) }
  }
  return product

})
console.log(result)
