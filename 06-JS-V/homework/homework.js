// No cambies los nombres de las funciones.
//como crear un objeto literal
//boris={
//nombre: 'boris'
//apellido: 'del caprio'
//edad:'23'
//direccion:'euwhfiuew23'
//email:jdfiefjiej@gmail.com
//------------------------------------------------
//functions constructors y new (objet factory)
// function Persona(){
//this.firstname='juan'
//this.lastname='perez'
//
//var juan=new Persona();
//console.log(jua)
//
//es convenvicion que la funcion constructora es con mayuscula
//
//vamos a hacer una funcion constructora de autos
//-----------------------------------------------
//function Car(marca,cc,color)
//this.marca =marca;
//this.cc= cc;
//this.color= color;
//}
//var audi=new Car('audi','1500','amarillo')
//var gol=new Car ('vw','1000','verde fluo')
//
//expected output
//Car {marca:'vw',cv:'1500',color:'amarillo'}
//-----------------------------------------------------
//el keyword new lo que hace es crear un objeto nuevo vacio, ahi invoca la funcion car y bindea con el objeto vacio
//el this de la funcion car tiene que ser objeto 
//y luego hace un return(objeto)
//
function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase usuario, nombre, email, password    +this.nombre+this.email+this.password    usuario,nombre,email,password
  // Tu código
  class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
      Usuario.prototype.saludar = function () {
        return ('Hola, mi nombre es '+this.nombre)
      }
    }
  }
  return(Usuario)
}
//
function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar= function() {
    return ("Hello World!")
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function reverse(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  } 

class Persona {
  constructor(nombre, apellido, edad, dir) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dir = this.dir;
    this.detalle = function () {
      const persona = { Nombre: this.nombre, apellido: this.apellido, edad: this.edad, dir: this.dir }
      return (persona)
    }
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  let persona1 = new Persona()
  return(persona1)
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function () {
    return (this.nombre + ", " + this.edad + " años")
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
