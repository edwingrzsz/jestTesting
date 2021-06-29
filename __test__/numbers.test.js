import { numbers } from '../numbers';

describe('Comparación de numeros', () => {
    test('Mayor que', () => {
        expect(numbers(2, 2)).toBeGreaterThan(6);
    });
    test('Mayor que o igual', () => {
        expect(numbers(2, 2)).toBeGreaterThanOrEqual(5);
    });
    test('Menor que', () => {
        expect(numbers(2, 2)).toBeLessThan(2);
    });
    test('Menor que o igual', () => {
        expect(numbers(2, 2)).toBeLessThanOrEqual(1);
    });
    test('Numeros flotantes', () => {
        expect(numbers(2.2, 2.2)).toBeCloseTo(4.0);
    })
})