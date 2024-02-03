import FloatToBinary from './Decimal-A-Binario';

describe('@FloatToBinary', () => { // Aquí se realizan las pruebas de la función FloatToBinary() para asegurarnos de que funcione correctamente.
    describe('#FloatToBinary', () => { // Se inicia la descripción de esta función.
      it('should be a function', () => { // Se verifica que FloatToBinary() sea una función. La palabra reservada “it“ se utiliza para referirse a la función FloatToBinary()
        assert.typeOf(FloatToBinary, 'function', 'FloatToBinary should be a function'); // Se verifica que FloatToBinary() sea una función y que trabaje como tal.
      });
  
      it('should convert decimal number to binary', () => { // Aquí se describe cuál es el trabajo o labor que hace la función FloatToBinary() que en este caso es convertir decimales al sistema binario. 
        assert.isTrue(FloatToBinary(0)  ===    '0'); // A partir de aquí se utiliza “assert“ junto con “isTrue“ para verificar que la función FloatToBinary() haga la conversión correctamente.
        assert.isTrue(FloatToBinary(1)  ===    '1');
        assert.isTrue(FloatToBinary(2)  ===   '10');
        assert.isTrue(FloatToBinary(3)  ===   '11');
        assert.isTrue(FloatToBinary(4)  ===  '100');
        assert.isTrue(FloatToBinary(5)  ===  '101');
        assert.isTrue(FloatToBinary(6)  ===  '110');
        assert.isTrue(FloatToBinary(7)  ===  '111');
        assert.isTrue(FloatToBinary(8)  === '1000');
        assert.isTrue(FloatToBinary(9)  === '1001');
        assert.isTrue(FloatToBinary(10) === '1010');
        assert.isTrue(FloatToBinary(11) === '1011');
        assert.isTrue(FloatToBinary(12) === '1100');
        assert.isTrue(FloatToBinary(13) === '1101');
        assert.isTrue(FloatToBinary(14) === '1110');
        assert.isTrue(FloatToBinary(15) === '1111');
      });
    });
  });