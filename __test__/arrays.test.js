import { arrayFruits, arrayColors } from "../arrays";

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('Banana');
    });
    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('Platano');
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(5);
    });
    test('Comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});