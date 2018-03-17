/*Crear una clase Alumno con los siguientesatributos:>>
numero_matricula, nombre, apellido, correo_electronico,estatus_inscrito.
La matrícula deberá ser numérica, mientras que correo_electronico, nombre y apellido como textos.
El  atributo estatus_inscrito deberá ser un valorbooleano.
*/

class Alumno{
    constructor(numeroMatricula, nombre, apellido, correo, estadoInscrito) {
        this.numeroMatricula = parseInt(numeroMatricula);
        this.nombre = nombre.toString();
        this.apellido = apellido.toString();
        this.correo = correo.toString();
        this.estadoInscrito = Boolean(estadoInscrito);
    }
}