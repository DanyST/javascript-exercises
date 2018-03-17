/*
Crear las clases AlumnoRemoto y AlumnoPresencial, ambas subclases de la clase Alumno creada enel  ejercicioKC_EJ31.>> 
AlumnoRemoto deberá contar con los atributos numero_matricula, nombre, apellido,  correo_electronico, 
estatus_inscrito, skype,huso_horario.>> Mientras que AlumnoPresencial deberá definir los atributos numero_matricula, 
nombre, apellido,  correo_electronico, estatus_inscrito,numero_asiento.
*/

class AlumnoRemoto extends Alumno{
    constructor(numeroMatricula, nombre, apellido, correo, estadoInscrito, skype, usoHorario) {
        super(numeroMatricula, nombre, apellido, correo, estadoInscrito);
        this.skype = skype;
        this.usoHorario = usoHorario;
    }
}

class AlumnoPresencial extends Alumno{
    constructor(numeroMatricula, nombre, apellido, correo, estadoInscrito, numeroAsiento) {
        super(numeroMatricula, nombre, apellido, correo, estadoInscrito);
        this.numeroAsiento = numeroAsiento;
    }
}
