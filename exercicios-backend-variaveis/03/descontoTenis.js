// Valor do tênis com desconto:

const valorTotal = 129.99
const meuDinheiro = 80
const desconto = valorTotal - meuDinheiro
const percentualDoDesconto = (desconto * 100 / valorTotal).toFixed(2)

console.log(` O vendedor terá que oferecer o percentual de ${percentualDoDesconto} % de desconto para o preço de tênis ficar em ${meuDinheiro} reais.`)
