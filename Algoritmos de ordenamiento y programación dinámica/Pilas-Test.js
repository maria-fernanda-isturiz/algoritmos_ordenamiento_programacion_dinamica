import Stack from './Pilas.js';

const { // Aquí se declara una constante con todos los métodos incluídos en la función Stack()
    push,
    pop, 
    last,
    hasElements,
    size, 
    print,
    clear
} = new Stack();

let stack = new Stack(); // También se puede instanciar un objeto a partir de Stack()

stack.push();
  
  describe('@Stack', () => { // Aquí se realizan las pruebas de cada uno de los métodos de la función Stack() para asegurarnos de que todos funcionen correctamente.
    describe('#push', () => { // Empezamos por el primer método que es push()
      it('should be a function', () => { // Se empieza con la palabra reservada “it“ para referirse al método push() y se usa función flecha. 
        assert.typeOf(push, 'function', 'push should be a function'); // “Assert“ se utiliza en este contexto para verificar si push() es o no una función y retorna un valor booleano de “true or false“ dependiendo de lo que obtenga de su verficación.
                                                                      // Su trabajo es lanzar un error si la función no cumple con la labor especificada para la cual fue creada. 
      });
  
      it('should add new element(s)', () => { // Aquí es donde se especifica que push() debería agregar nuevos elementos al final de la pila o “stack“
        // Se agregan los siguientes libros o volúmenes a la pila o “stack“
        push('El Señor de los Anillos'); // [0] // Los índices de los elementos agregados a la pila usando el método push()
        push('El Código da Vinci');      // [1]
        push('Kain y Abel');             // [2]
        push('El Alquimista');           // [3]
        push('El Hobbit');               // [4]
  
        // La pila debe tener una longitud o “length“ de 5 elementos, ya que los índices en el arreglo empiezan por 0 y terminan en 4.  
        const actualResult = size(); // Este es el método encargado de devolvernos el tamaño total de todo el arreglo, se guarda en la constante “actualResult“.
        const expectedResult = 5; // En esta constante se asigna el valor fijo que debería tener la pila o “stack“ después de haber agregado los 5 libros con el método push()
  
        assert.isTrue(expectedResult === actualResult); // Aquí utilizamos “assert“ para verificar si el valor de ambas constantes “actualResult“ y “expectedResult“ es el mismo. De ser así, devolverá “true“ y significa que el método push() hace su trabajo correctamente.
      });
    });
  
    describe('#pop', () => { // Se continúa con el siguiente método que es pop() 
      it('should be a function', () => { // Se empieza con la palabra reservada “it“ para referirse al método pop() y se usa función flecha.
        assert.typeOf(pop, 'function', 'pop should be a function'); // “Assert“ se utiliza en este contexto para verificar si pop() es o no una función y retorna un valor booleano de “true or false“ dependiendo de lo que obtenga de su verficación.
      });
  
      it('should remove and return the last element', () => { // Aquí es donde se especifica que pop() debería remover o eliminar los últimos elementos agregados recientemente a la pila o “stack“
        // Eliminando el último elemento de la pila. 
        const actualResult = pop(); // En esta constante se utiliza el método pop() para eliminar el último elemento agregado al final de la pila o “stack“
        const expectedResult = 'El Hobbit'; // En esta constante se asigna el valor del último libro agregado a la pila para luego hacer una comparación. 
  
        assert.isTrue(size() === 4); // Se utiliza “assert“ acompañado de “isTrue“ para verificar si el la longitud total del arreglo ha disminuido de 5 a 4, para esto también volvemos a utilizar size() para volver a medir la longitud total de la pila. 
        assert.isTrue(expectedResult === actualResult); // En esta sección se realiza la comparación entre los valores de las constantes “expectedResult“ y “actualResult“ para verificar que el nuevo tamaño de la pila ahora sea 4 y no 5, y que los valores en ambas constantes coincidan. De ser así, devuelve “true“ y significa que el método pop() funciona correctamente.
      });
    });
  
    describe('#last', () => { // Se continúa con el siguiente método que es last() 
      it('should be a function', () => { // Se empieza con la palabra reservada “it“ para referirse al método last() y se usa función flecha.
        assert.typeOf(last, 'function', 'last should be a function'); // “Assert“ se utiliza en este contexto para verificar si last() es o no una función y retorna un valor booleano de “true or false“ dependiendo de lo que obtenga de su verficación.
      });
  
      it('should return the last element', () => { // Aquí es donde se especifica que last() debería devolver el último elemento agregado más recientemente a la pila o “stack“
        // Obteniendo el último elemento
        const actualResult = last(); // Se utiliza esta constante para guardar en ella el valor que nos devuelva el método last(); 
        const expectedResult = 'El Alquimista'; // En esta constante se asigna el valor fijo que corresponde al que debería ser el último libro que queda dentro de la pila o “stack“
  
        assert.isTrue(expectedResult === actualResult); // En esta sección utilizamos “assert“ acompañado de “isTrue“ para comparar si el valor de ambas constantes “expectedResult“ y “actualResult“ son idénticos entre sí y valen lo mismo. De ser así, retorna “true“ y significa que el método last() funciona correctamente. 
      });
    });
  
    describe('#hasElements', () => { // Se continúa con el siguiente método que es hasElements() 
      it('should be a function', () => { // Se empieza con la palabra reservada “it“ para referirse al método hasElements() y se usa función flecha.
        assert.typeOf(hasElements, 'function', 'hasElements should be a function'); // “Assert“ se utiliza en este contexto para verificar si hasElements() es o no una función y retorna un valor booleano de “true or false“ dependiendo de lo que obtenga de su verficación.
      });
  
      it('should return true if the stack has elements', () => { // Aquí es donde se especifica que hasElements() debería indicarnos si aún quedan elementos dentro de la pila o “stack“
        // Aquí se le pregunta al método hasElements() si la pila o “stack“ todavía contiene elementos dentro de sí. 
        const actualResult = hasElements(); // Se guarda el valor booleano de “true or false“ que nos devuelva hasElements() dentro de esta constante. 
        const expectedResult = true; // En esta constante se guarda el valor de “true“ en forma directa y fija para luego compararlo con el valor que devuleva hasElements() en la constante anterior. 
  
        assert.isTrue(expectedResult === actualResult); // En esta sección utilizamos “assert“ junto con “isTrue“ para verificar si el valor de las dos constantes anteriores coinciden y valen lo mismo. De ser así, significa que dentro de la pila o “stack“ aún quedan elementos. 
      });
    });
  
    describe('#size', () => { // Se continúa con el siguiente método que es size()
      it('should be a function', () => { // Se empieza con la palabra reservada “it“ para referirse al método size() y se usa función flecha.
        assert.typeOf(size, 'function', 'size should be a function'); // “Assert“ se utiliza en este contexto para verificar si size() es o no una función y retorna un valor booleano de “true or false“ dependiendo de lo que obtenga de su verficación.
      });
  
      it('should return the current size of the stack', () => { // Aquí es donde se especifica que size() debería devolvernos el tamaño o longitud total de la pila o “stack“
        // Obteniendo el tamaño o longitud total de la pila o “stack“
        const actualResult = size(); // En esta constante se guarda el valor que devuelva el método size()
        const expectedResult = 4; // En esta constante se asigna el valor fijo que debería tener la longitud de toda la pila, para compararlo después con el valor devuelto por el método size()
  
        assert.isTrue(expectedResult === actualResult); // En esta sección utilizamos “assert“ junto con “isTrue“ para comparar los valores almacenados en ambas constantes y verificar si coinciden. De ser así, devuelve “true“ y significa que el método size() funciona correctamente. 
      });
    });
  
    describe('#clear', () => { // Se continúa con el siguiente método que es clear()
      it('should be a function', () => { // Se empieza con la palabra reservada “it“ para referirse al método clear() y se usa función flecha.
        assert.typeOf(clear, 'function', 'clear should be a function'); // “Assert“ se utiliza en este contexto para verificar si clear() es o no una función y retorna un valor booleano de “true or false“ dependiendo de lo que obtenga de su verficación.
      });
  
      it('should clear the stack', () => { // Aquí es donde se especifica que clear() debería eliminar de un solo todos los elementos restantes dentro de la pila o “stack“
        // Limpiar la pila o “stack“
        clear(); // Se utiliza el método clear() sin asignarlo a ninguna variable, ya que se busca vaciar la pila completa de un solo. 
  
        const actualResult = size(); // En esta constante se almacena el valor que devuelva el método size() que será nuevamente utilizado para volver a medir o verificar el tamañ o longitud actual de la pila luego de haber usado previamente el método clear() para eliminar todos sus datos restantes. 
        const expectedResult = 0; // En esta constante se guarda el valor fijo de 0 para poder compararlo después con el valor que devuelva el método size() en la constante anterior. 
  
        assert.isTrue(expectedResult === actualResult); // En esta sección utilizamos “assert“ junto con “isTrue“ para verificar y comparar los valores almacenados en las dos constantes anteriores, para ver si el valor de ambas coincide y es idéntico. De ser así, entonces signfica que el método clear() funciona correctamente y que ahora la pila está totalmente vacía. 
      });
    });
  
    describe('#print', () => { // Se continúa con el siguiente método que es print()
      it('should be a function', () => { // Se empieza con la palabra reservada “it“ para referirse al método print() y se usa función flecha.
        assert.typeOf(print, 'function', 'print should be a function'); // “Assert“ se utiliza en este contexto para verificar si print() es o no una función y retorna un valor booleano de “true or false“ dependiendo de lo que obtenga de su verficación.
      });
  
      it('should print the current stack', () => { // Aquí es donde se especifica que print() debería imprimir la pila o “stack“ en formato “string“ o en cadena de caracteres. 
        // Antes de imprimir la pila o “stack“ debemos agregar nuevos datos a la pila, ya que anteriormente fue vaciada y limpiada por completo.
        push(10); // Se utiliza otra vez el método push() para agregar elementos dentro de la pila. Se pueden guardar distintos tipos de datos, anteriormente fueron títulos de libros en formato “string“ y ahora se guardan datos numéricos.
        push(20);
        push(30);
  
        const actualResult = print(); // Se imprime la pila o “stack“ que ya tiene nuevos datos agregados a ella como una cadena de caracteres usando el método print() y guardando este valor dentro de esta misma constante.
        const expectedResult = '10,20,30'; // Se le asigna a esta constante el valor fijo en cadena de caracteres para comparar este valor dado aquí con el valor de la constante anterior. 
  
        assert.isTrue(expectedResult === actualResult); // En esta sección utilizamos “assert“ junto con “isTrue“ para comparar los valores almacenados en ambas constantes enteriores y verificar que ambos valores sean idénticos entre sí, y de ser esto cierto entonces significa que la pila ya tiene los nuevos valores almacenados dentro de ella.
      });
    });
  });