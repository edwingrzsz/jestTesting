describe('Comparadores comunes', () => {
    const user = {
        name: "Edwing",
        lastname: "Ruiz"
    }
    const user2 = {
        name: "Edwing",
        lastname: "Ruiz"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son excactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });

});