// Cálculo de juros Compostos

const capital = 1000
const taxaFixa = 0.125
const tempo = 5

//M = C(1 + i)^t 
const montante = (capital * (1 + 0.125) ** tempo).toFixed(2)



console.log(`O valor do montante será de R$ ${montante}.`)
