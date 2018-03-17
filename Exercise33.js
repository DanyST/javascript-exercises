 /*
Usando las clases de los ejercicios KC_EJ31 y KC_EJ32, crear un programa que contenga una
instancia de la clase Módulo, con instancias de alumnos predefinidos en init. El programa permitiráal
usuario:>>  Ver todos los alumnosenrolados.>>  Buscar un alumno pormatrícula.
*/

Modulo.prototype.buscarAlumnoPorMatricula = function (matricula) {
    let alumnoFiltrado = this.listadoAlumnos.filter(alumno => alumno.numeroMatricula === parseInt(matricula));
    document.write(`</br>Alumno encontrado con el numero de matricula '${matricula}' : </br>`);
    this.mostrarAlumnoFiltrados(alumnoFiltrado);
}

Modulo.prototype.init = function () {
    let alumno1 = new Alumno('1','Pedro', 'Simpson', 'pedro.simpson@gmail.com', true);
    let alumno2 = new Alumno('2', 'Juan', 'Simpson', 'juan.simpson@gmail.com', true);
    let alumno3 = new Alumno('3', 'Diego', 'Simpson', 'diego.simpson@gmail.com', true);

    this.listadoAlumnos.push(alumno1, alumno2, alumno3);
}

let modulo = new Modulo(new Array(), '23 de Marzo', '05 de Abril');
modulo.init();