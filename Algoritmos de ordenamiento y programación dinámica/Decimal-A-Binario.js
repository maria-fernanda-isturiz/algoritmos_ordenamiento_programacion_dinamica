

        import Stack from './Pilas.html'; // Importación de la función Stack() desde el archivo Pilas.html

        // Función para convertir decimales o “float“ al sistema de números binarios. 
        function FloatToBinary(float){ 
            if(float === 0){ // Con este condicional, comparamos si el número que nos están mandando como argumento es igual a 0.
                return '0'; // De ser esto cierto, entonces la función debe retornar 0, ya que no hay decimal válido para convertir al sistema binario. 
            }

            const stack = new Stack(); // Aquí utilizo el Stack() importado previamente del archivo Pilas.html a este archivo.
            let rem; // Esta variable será utilizada para almacenar los residuos de las divisiones entre los decimales.
            let binaryString = ''; // Esta variable almacenará los números binarios como tal. 

            while (float > 0) { // En este ciclo “while“ indicaremos la condición que se cumplirá solamente si el número decimal es mayor a 0.
                rem = Math.floor(float % 2); // Inicializamos la variable antes declarada como “rem“ y usamos el método matemático Math.floor() para redondear el residuo que quede de la división etre 2.
                                             // Sólo debería regresarnos 0 o 1, ya que así funciona el sistema binario. 
                
                // Empezamos a agregar datos a la pila: 
                stack.push(rem); // Guardamos en la pila el valor devuelto por la variable “rem“ usando el método push()
                
                // Dividimos entre 2: 
                float = Math.floor(float / 2); // Aquí se va a dividir el número decimal entre 2 y sólo nos quedaremos con la parte entera gracias al método Math.floor()
            }

            // Volvemos a usar otro ciclo “while“ para establecer como condición fundamental que se ejecute el código mientras la pila aún tenga elementos.
            while (stack.hasElements()) {
                binaryString += stack.pop().toString(); // Se concatenan los números binarios en formato “string“ o como cadena de caracteres
                                                        // Se utiliza el método pop() para extraer el último número presente en la pila y luego
                                                        // convertirlo en formato de cadena de caracteres. 
            }

            return binaryString; 
        }

        FloatToBinary(2);

        export default FloatToBinary;