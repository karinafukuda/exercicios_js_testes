// A banda The XPTOs vai gravar o seu primeiro disco! Eles foram em vários estúdios de amigos e perceberam que, ao tocar, existia um eco em alguns deles. 
// Alguns estudios que eles visitaram tinham 8, 16, 18, 24, 36 metros entre os amplificadores e as paredes opostas
// Sabendo que as pessoas conseguem perceber o eco num tempo maior ou igual a 0,1s. 
// Crie uma função que consiga determinar se há eco em um estudio de acordo com a distância entre os amplificadores e a parede oposta, considerando a velocidade do som como 340m/s?

let deltaEspaco = (340 * 0.1)/2;

function retornaSeHaEcoNoEstudio(distancia) {
  if(distancia >= deltaEspaco){
    return true;
  }else{
    return false;
  }
}
console.log(retornaSeHaEcoNoEstudio(8));

//Test Mocha BDD
let assert = require("chai").assert;
describe('Retorna Se Ha Eco No Estudio', function() {
  it('Deve Calcular Com Distância De Oito Metros', function() {
    assert.equal(retornaSeHaEcoNoEstudio(8), false);
  });
  it('Deve Calcular Com Distância De Vinte Metros', function() {
    assert.equal(retornaSeHaEcoNoEstudio(20), true);
  });
});

//Time: 790msPassed: 6Failed: 0