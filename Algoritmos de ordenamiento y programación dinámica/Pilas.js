
        function Stack(){
            let items = []; // Iniciamos con un arreglo vacío al cual se le irán agregando elementos uno a uno. 

            // Se usarán estos métodos: 
            // push() para agregar elementos. 
            // pop() para eliminar elementos. 
            // last() para obtener el último elemento insertado. 
            // hasElements() para verificar si la pila tiene elementos. 
            // size() para saber el tamaño de la pila.
            // print() para imprimir la pila en cadena de caracteres o “string“.
            // clear() para limpiar la pila. 

            this.push = element => { // Se utiliza una función flecha para utilizar el método push()
                items.push(element); // Aquí es donde se van agregando los elementos al arreglo “items“. El parámetro “elements“ se le pasa
                                     // como argumento para indicarle qué datos debe agregar al arreglo o pila. 
            };

            this.pop = () => { // Se utiliza una función flecha para utilizar el método pop(). No se le pasa ningún argumento, ya que no requiere ningún parámetro. 
                return this.hasElements ? items.pop() : false ; // Aquí se remueve o elimina el último elemento agregado a la pila. 
                                                                // El método pop() simplemente elimina el último dato agregado a un arreglo 
                                                                //  o pila sin necesidad de especificarle qué elemento debe eliminar. 

                                                                // Se utiliza un operador ternario para verificar si la pila tiene datos 
                                                                // dentro de ella y de ser así, se extraen los datos con pop(), pero de ser lo
                                                                // contrario, entonces retorna “false“ y no extrae ningún dato. 
            };

            this.last = () => {
                return items[items.length - 1]; // Se le pide que retorne el último elemento que quede aún dentro del arreglo 
                                                // Se le resta 1 a la longitud total del arreglo, ya que se busca retornar el último 
                                                // elemento que quede y por lo tanto, no se puede llegar hasta el índice 0 del arreglo.
            };

            this.hasElements = () => {
                return items.length > 0; // Se compara la longitud del arreglo con 0 para verificar si todavía quedan datos o elementos
                                         // dentro del arreglo. 
            };

            this.size = () => {
                return items.length; // Nos dará información sobre el tamaño total de toda la pila. 
            };

            this.print = () => {
                return items.toString(); // Se utiliza este método para convertir la pila o arreglo a cadena de caracteres o “string“.
            };

            this.clear = () => {
                items = []; // Se vuelve a asignar un arreglo vacío para empezar de nuevo. 
            }
        }

        export default Stack;
