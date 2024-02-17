// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprovar funció paritat', function() {
	assert.equal(operaciones.paritat(2), true);
	assert.equal(operaciones.paritat(1), false);
	assert.equal(operaciones.paritat(0), true);
});



