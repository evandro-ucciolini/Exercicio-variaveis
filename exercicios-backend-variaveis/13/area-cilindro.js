//Área total de um cilindro

const raioDaBase = 3
const alturaDoCilindro = 1

const areaTotalDoCilindro = 2 * Math.PI * raioDaBase + (raioDaBase + alturaDoCilindro)

// O resultado do cálculo foi de 22.84 e o sistema arredondou para 23. 
console.log(` A área total do cilindro é de aproximadamente ${Math.round(areaTotalDoCilindro)} PI.`)