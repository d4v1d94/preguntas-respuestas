const quizData = [
    {
        question: "¿Qué es OOPS?",
        a: 'Sistema de Programación Orientada a Objetos (Object Oriented Programming system)',
        b: 'Orientación de progrmacion y objetos',
        c: 'organization of publics systems',
        d: 'Ninguna de las anteriores',
        img: './img/nivel1.jpg',
        nivel: '1',
        correct: 'a'
    },
    {
        question: "¿Cuales son conceptos básicos de OOPS?",
        a: 'sistema de produccion y desarrollo',
        b: 'polimorfismo y pluralismo',
        c: 'Encapsulación, Herencia, Polimorfismo, Abstracción.',
        d: 'Ninguna de las anteriores',
        img: './img/nivel1.jpg',
        nivel: '1',
        correct: 'c'
    },
    {
        question: "¿Qué es una clase?",
        a: 'Es un objeto social',
        b: 'Es la representación de un cierto tipo de objeto. Es el plan que define las características de un objeto.',
        c: 'metodos que se usan para programar',
        d: 'son variables agrupadas en un objeto',
        img: './img/nivel1.jpg',
        nivel: '1',
        correct: 'b'
    },
    {
        question: "¿Qué es un objeto?",
        a: 'Es una variable',
        b: 'Parametro que se le pasa a una función',
        c: 'Es parte de una clase. Tiene su propio estado, comportamiento y definición.',
        d: 'Es un arreglo de datos',
        img: './img/nivel1.jpg',
        nivel: '1',
        correct: 'c'
    },
    {
        question: "¿Qué es la encapsulación?",
        a: 'Proceso quimico de creación de farmacos',
        b: 'Instanciación de una clase y el uso de esta',
        c: 'Es pasar parametros a una función',
        d: 'Es una característica del objeto y guarda todos los datos ocultos. Estos datos (ocultos) pueden estar limitados para los que forman esa clase. Sus niveles son, internos, protegidos, públicos,  protegidos internos, y privados',
        img: './img/nivel1.jpg',
        nivel: '1',
        correct: 'd'
    },
    {
        question: "¿Qué es el polimorfismo?",
        a: 'Tener varios cuerpos',
        b: 'Es la asignación de un valor que se da a una subclase, o que se había declarado ya en la clase principal.',
        c: 'Es la creación de varias clases bajo la misma estructura de datos y variables',
        d: 'Ninguna de las anteriores',
        img: './img/nivel2.png',
        nivel: '2',
        correct: 'b'
    },
    {
        question: "¿Qué es la herencia?",
        a: 'es el concepto con el cual se aclara que una clase divide la estructura y comportamiento definidos en otra clase. ',
        b: 'Es los bienes y beneficios que dejan tus familiares al fallecer',
        c: 'Tomar conceptos, funciones y variables de una función y pasarlas a otra',
        d: 'Todas las anteriores',
        img: './img/nivel2.png',
        nivel: '2',
        correct: 'a'
    },
    {
        question: "¿Qué son los manipuladores (manipulators)?",
        a: 'Son los que definen las alzas y las bajas en los mercados',
        b: 'Son helpers que nos ayudaran a llevar una mejor loogica en el codigo',
        c: 'Son  las funciones que se utilizan junto con operadores de inserción (<<) y extracción (>>) en un objeto.',
        d: 'Funciones desarrolladas con fines cientificos',
        img: './img/nivel2.png',
        nivel: '2',
        correct: 'c'
    },
    {
        question: " ¿Como se define un constructor?",
        a: 'Se define como una función para escalar una aplicación',
        b: 'Se define así al método que se utiliza para iniciar el estado de un objeto',
        c: 'Se define a traves de variables y funciones autoejecutables',
        d: 'Ninguna de las anteriores',
        img: './img/nivel2.png',
        nivel: '2',
        correct: 'b'
    },
    {
        question: "¿Que reglas puede tener un constructor?",
        a: 'El constructor tiene un nombre, que debe ser el mismo nombre de la clase',
        b: 'El constructor no puede tener ningún tipo de retorno',
        c: 'Solo existe en Javascript',
        d: 'Las dos primeras opciones son correctas',
        img: './img/nivel2.png',
        nivel: '2',
        correct: 'd'
    },
    {
        question: "¿Qué es una función en línea (inline)?",
        a: 'Función modificada desde la nube y puede ser utilizada en todo momento',
        b: 'Es la técnica usada por  compiladores y que  indica que introduzcas el cuerpo entero de la función, siempre que la función se use  el código que es fuente del programa.',
        c: 'Arquitectura de software utilizada por grandes compañias',
        d: 'Funcion despegable y reutilizable',
        img: './img/nivel3.jpg',
        nivel: '3',
        correct: 'b'
    },
    {
        question: "¿Qué es una clase abstracta?",
        a: 'Es aquella clase que no se comprende',
        b: 'Es aquella clase que no tiene forma',
        c: 'Es aquella clase que no puede ser instanciada',
        d: 'Es aquella clase que puedes instanciar',
        img: './img/nivel3.jpg',
        nivel: '3',
        correct: 'c'
    },
    {
        question: "¿Qué es un operador ternario (ternary)?",
        a: 'Es el que toma dos argumentos',
        b: 'Es el que toma tres argumentos',
        c: 'Es el que no puede ser cambiado',
        d: 'Es aquel operador donde puedes hacer varias operaciones',
        img: './img/nivel3.jpg',
        nivel: '3',
        correct: 'b'
    },
    {
        question: "¿Que hace la palabra clave super?",
        a: 'Es la que se utiliza para llamar el método overridden',
        b: 'La palabra clave deja entrar a métodos sobrescritos y a miembros escondidos de la superclase',
        c: 'Reenvía una llamada de un constructor a otro constructor',
        d: 'Todas las anteriores',
        img: './img/nivel3.jpg',
        nivel: '3',
        correct: 'd'
    },
    {
        question: "¿Qué es una interfaz?",
        a: 'Es la colección que tiene el método abstracto.',
        b: 'Es lo que el usuario final visualiza',
        c: 'Es una herramienta de programación',
        d: 'Es una función autoejecutable',
        img: './img/nivel3.jpg',
        nivel: '3',
        correct: 'a'
    },
    {
        question: "¿Qué es una abstracción?",
        a: 'Es tomar las caracteristicas y metodos necesarios de una clase para hacer funcionar esta',
        b: 'Es instanciar una clase',
        c: 'Es una de la característica de OOPS que muestra solamente los detalles y que necesita el cliente de un objeto',
        d: 'Es hacer uso de la herencia',
        img: './img/nivel4.png',
        nivel: '4',
        correct: 'c'
    },
    {
        question: "¿Qué es el puntero 'this'?",
        a: ' this, define al objeto actual de una clase',
        b: 'this, es una palabra en ingles',
        c: 'this, no existe en la programación',
        d: 'this, es un acronimo',
        img: './img/nivel4.png',
        nivel: '4',
        correct: 'a'
    },
    {
        question: "¿Qué son modificadores sellados?",
        a: 'Son aquellos que no pueden ser editados en ningún momento',
        b: 'Son los modificadores de acceso a los cuales no se les permiten ser heredados por los métodos',
        c: 'Son los modificadores de una funcion',
        d: 'Es un concepto ligado a la programación funcional',
        img: './img/nivel4.png',
        nivel: '4',
        correct: 'b'
    },
    {
        question: "¿Qué es el polimorfismo dinámico o de runtime?",
        a: 'Son las distintas formas que puede tomar una funcion',
        b: 'Es la herencia en varias clases',
        c: 'Es el método de cancelación en el cual la llamada a una función anulada se resolverá durante el tiempo de ejecución',
        d: 'Es un objeto indefinido',
        img: './img/nivel4.png',
        nivel: '4',
        correct: 'c'
    },
    {
        question: "¿Qué es un constructor copy?",
        a: 'Es un concepto en la programación estructurada',
        b: 'Es un constructor que copia solo las variables de la clase heredada',
        c: 'Es copiar las funcionalidades y parametros de una función',
        d: 'Es un constructor especial, el cual se usa para crear un nuevo objeto como copia de un objeto que ya existe.',
        img: './img/nivel4.png',
        nivel: '4',
        correct: 'd'
    },
    {
        question: "¿Qué es una clase base?",
        a: 'Es la más generalizada, igualmente se dice que es una clase raíz.',
        b: 'Es una clase en la cual todo el sistema se basa',
        c: 'Clase que no se puede instanciar',
        d: 'Clase que no puede ser heredada',
        img: './img/nivel5.jpg',
        nivel: '5',
        correct: 'a'
    },
    {
        question: "¿Que es una subclase?",
        a: 'Es la que antepone la clase principal',
        b: 'Clase heredada varias veces',
        c: 'Es la que hereda de una o más clases base',
        d: 'Ninguna de las anteriores',
        img: './img/nivel5.jpg',
        nivel: '5',
        correct: 'c'
    },
    {
        question: "¿Que es super clase?",
        a: 'Clase que tiene muchos metodos y variables',
        b: 'Es la padre de la cual va a heredar otra clase',
        c: 'Clase que carece de metodos y variables',
        d: 'Clase con mas de un constructor',
        img: './img/nivel5.jpg',
        nivel: '5',
        correct: 'b'
    },
    {
        question: "¿Cuántas instancias se pueden crear para una clase abstracta?",
        a: 'Se puede instanciar una vez',
        b: 'Se puede instanciar mas de una vez',
        c: 'Se puede instanciar dos veces',
        d: 'No se puede crear ninguna instancia.',
        img: './img/nivel5.jpg',
        nivel: '5',
        correct: 'd'
    },
    {
        question: "¿Cuál es el especificador de acceso predeterminado en una definición de clase?",
        a: 'El especificador de acceso multiple (multiple access).',
        b: 'El especificador de acceso vacio (void access).',
        c: 'El especificador de acceso privado (private access).',
        d: 'El especificador de acceso publico (public access)',
        img: './img/nivel5.jpg',
        nivel: '5',
        correct: 'c'
    },
]