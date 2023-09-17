// Meu simulador de casos de COVID-19.

const populaçãoInicialInfectada = 1000
const capacidadeDeTransmissao = 4
const tempoPercorrido = 100

const totalInfectadas = (populaçãoInicialInfectada * capacidadeDeTransmissao * (tempoPercorrido / 7)).toFixed(0)

console.log(`Após 100 dias, o total de pessoas infectadas será de ${totalInfectadas}, uma vez que inicialmente existiam 1000 pessoas infectadas.`)