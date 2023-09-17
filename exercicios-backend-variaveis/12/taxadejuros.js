//Taxa de Juros

const capitalInicial = 60000
const montante = 90000
const numeroDeMeses = 24

// O sistema arredondou 0.1703 para 1.704 com o uso da função ToFixed.
const taxaDeJuros = (((montante / capitalInicial) ** (1 / numeroDeMeses) - 1) * 100).toFixed(3)


console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros}%, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais.`)
