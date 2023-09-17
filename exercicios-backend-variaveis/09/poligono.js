// Soma dos ângulos internos de um polígono
//(https://static.escolakids.uol.com.br/conteudo_legenda/460f67f820a78f732d55395e1932a031.jpg)

const numeroDeLados = 6
const somaDosAngulos = ((numeroDeLados - 2) * 180)
const valorDeCadaAnguloEmGraus = (somaDosAngulos / numeroDeLados)

console.log(`A soma dos ângulos internos é de ${somaDosAngulos}° e o valor de cada ângulo do polígono é de ${valorDeCadaAnguloEmGraus}°.`)