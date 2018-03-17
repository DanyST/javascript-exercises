 /*
 Crear una clase Módulo con los siguientesatributos:>> 
Listado_alumnos, fecha_inicio,fecha_fin.El listado de alumnos deberá ser tipo Lista y 
contener objetos de tipo Alumno creado en elejercicioKC_EJ31.En la misma clase Módulo deberá implementar métodospara>>
agregar objetos Alumno a laLista>>  buscar unalumno>>  mostrar todos los alumnos con estatus_inscrito ==Tr u e .
*/

class Modulo{
    constructor(listadoAlumnos, fechaInicio, fechaFin) {
        this.listadoAlumnos = listadoAlumnos;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    agregarAlumno(nombre, apellido, correo, estadoInscrito) {
        let generarNumMatricula = this.listadoAlumnos.length + 1;
        let nuevoAlumno = new Alumno(generarNumMatricula, nombre, apellido, correo, estadoInscrito);
        this.listadoAlumnos.push(nuevoAlumno);
    }

    buscarAlumnoPorNombre(nombre) {
        let alumnoFiltrado = this.listadoAlumnos.filter(alumno => alumno.nombre === nombre);
        document.write(`</br>Alumnos encontrados con el nombre '${nombre}' : </br>`);
        this.mostrarAlumnoFiltrados(alumnoFiltrado);
    }

    mostrarAlumnosInscritos() {
        document.write('Listado de alumnos inscritos: </br>');
        let alumnosInscritos = this.listadoAlumnos.filter(alumno => alumno.estadoInscrito === true);
        this.mostrarAlumnoFiltrados(alumnosInscritos);
    }

     mostrarAlumnoFiltrados(alumnos){
        for(let i = 0; i < alumnos.length; i++) {  
            document.write(`
                ${alumnos[i].nombre}
                ${alumnos[i].apellido} -
                ${alumnos[i].correo}
            </br>`);
        }
    }
}