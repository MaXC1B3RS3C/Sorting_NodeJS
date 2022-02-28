var mocha = require('mocha')
var it = mocha.it
var expect = require('chai').expect;
const {llista,llista_nom,llista_data} = require("../src/dades.js")
var {ordenar_per_nom,ordenar_per_naiximent} = require("../src/functions.js")

it("#Test function: ordenar_per_nom - Comprova si els 2 arrays de dades son iguals (el que retorna la funció ordenar_per_nom i el array importat llista_nom) ", function() {
    expect(ordenar_per_nom(llista)).to.deep.equal(llista_nom);  //OK
});

it("#Test function: ordenar_per_naiximent - Comprova si els 2 arrays de dades son iguals (el que retorna la funció ordenar_per_naiximent i el array importat llista_data) ", function() {
    expect(ordenar_per_naiximent(llista)).to.deep.equal(llista_data);
});

