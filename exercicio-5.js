// 6 amigos (Ana, Bia, Cadu, Duda, Edu e Fabi) tem uma banda de rock, moram próximos ao centro da cidade. O mapa é o que está aqui abaixo, mostrando onde cada um mora.
// Eles sempre revezam os ensaios cada dia na casa de um integrante e costumam tocar em um pub no lugar P.
// Crie uma função que calcule a soma da quantidade de quilômetros são percorridos no total pelos participantes, permitindo que seja informado a quantidade de rodadas de ensaios e shows que a banda fez.
// Suponha a distância das laterais dos quarteirões são de 250m e desconsidere a largura das ruas.

function calculaDistanciaBandaPercorre(numeroRodadaEnsaios,numeroShows) {
  
 const lateral = 250;
 var idaVolta = 2;
 let casaBia = 13;
 let casaCadu = 11;
 let casaEdu = 9;
 let casaFabi = 11;
 let casaAna = 11;
 let casaDuda = 15;
 //17500

 let pubP = 21; 
 //5250
 
 var numeroEnsaios = (( casaBia + casaCadu + casaEdu + casaFabi + casaAna + casaDuda)*idaVolta)*lateral;
 var shows = (pubP * idaVolta)*lateral;
 
 return (numeroRodadaEnsaios * numeroEnsaios) + (numeroShows * shows) ;
}

console.log(calculaDistanciaBandaPercorre(1, 1));

//Test BDD

let assert = require("chai").assert;
describe('Calcula Distancia Banda Percorre', function() {
  it('Com Uma Rodada De Ensaios E Um Show', function() {
    assert.equal(calculaDistanciaBandaPercorre(1,1), 45500);
  });
});

//Time: 754ms Passed: 6 Failed: 0