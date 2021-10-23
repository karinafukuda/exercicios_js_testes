// Uma banda vai se apresentar numa arena onde, do palco até a última pessoa que está assistindo ao show, tem uma distância d (d pode ter diversos valores: 0,35 km, 0,6 km, 1,02 km).
//Sabendo que a velocidade do som é 340 m/s, crie uma função que retorne em aproximadamente quanto tempo, em milisegundos, o som sai da caixa de som até ser ouvido pela última pessoa?

var distancia;
var velocidade = 340;

function retornaTempoArenaEmMilisegundos(distancia,velocidade) {
var distanciaConvertida = distancia * 1000;
  if ( distanciaConvertida !== NaN){
    return ((distanciaConvertida / velocidade) *1000).toFixed(0); 
  }
}
console.log(retornaTempoArenaEmMilisegundos(0.45, 340));

//teste Mocha BDD
let assert = require("chai").assert;
describe('Retorna Tempo Arena Em Milisegundos', function() {
  it('Deve Calcular Com Distância De Quatrocentos E Cinquenta Metros', function() {
    assert.equal(retornaTempoArenaEmMilisegundos("0.45",340), 1324);
  });
});
// Time: 687msPassed: 1Failed: 0