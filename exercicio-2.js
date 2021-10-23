//Um show organizado, com pessoas verificando ingressos, e os seguranças olhando os participantes foi feito com o público de p pessoas (suponha que pode ser, por exemplo, 2.749). 
//Para as pessoas entrarem, a média de tempo entre entregar o ingresso e poder acessar a área dos shows é de s segundos (suponha, por exemplo, 50).
//Para agilizar a entrada, a produção do evento disponibilizou n portões de entrada (suponha 8). 
//Qual o tempo mínimo, em minutos, para que todos os participantes entrem completamente na área dos shows?

function retornaTempoMinimoEmMinutos(p,s,n) {
 var calculoTempoTotal = ((p *s)/60);
 if ( p, s, n !==NaN){
   return Math.ceil(calculoTempoTotal/n);
 }
}
console.log(retornaTempoMinimoEmMinutos(2749,50,8));

//Test Mocha BDD
let assert = require("chai").assert;
describe('Retorna Tempo Minimo Em Minutos', function() {
  it('Deve Calcular Com Duas Mil Setecentos E Quarenta E Nove Pessoas E Oito Portoes A Cinquenta Segundos Por Pessoa', function() {
    assert.equal(retornaTempoMinimoEmMinutos(2749,50,8), 287);
  });
});
//Time: 889msPassed: 1Failed: 0