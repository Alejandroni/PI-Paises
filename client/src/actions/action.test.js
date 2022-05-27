const {filterContinentes} = require ("./index.js");

describe('Función filterContinentes', () => {
    it('Es una función', () => {
      expect(typeof filterContinentes).toBe('function');
    });
});