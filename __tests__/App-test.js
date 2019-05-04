/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import { getRandomInt } from "../src/lib/random";
import { esMayor, esIgual } from "../src/lib/validador";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});


describe('funcion random', () => {

  it('debe generar un numero meno a 100', async () => {
    const limite = 100;
    const nuevoNumero = getRandomInt(limite);
    expect(nuevoNumero).toBeLessThan(limite);
  });

});

describe('Funciones de igualdad', () => {

  it('responde afirmativo cuando dos numero iguales', async () => {
    const a = 100;
    expect(esIgual(a, 100)).toBeTruthy();
  });

  it('responde negativo cuando dos numero son diferentes', async () => {
    const a = 100;
    expect(esIgual(a, 20)).toBeFalsy();
  });

});

describe('Funciones de mayor', () => {

  it('responde afirmativo cuando un valor es mayor al otro', async () => {
    const a = 100;
    const b = 150;
    expect(esMayor(a, b)).toBeFalsy();
    expect(esMayor(b, a)).toBeTruthy();
  });

  it('responde negativo cuando dos numero son iguales', async () => {
    const a = 100;
    const b = 100;
    expect(esMayor(a, b)).toBeFalsy();
  });

});