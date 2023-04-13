window.onload = iniciar;

let numTarea = 1;


function iniciar() {
    let btnAgregar = document.getElementById("btnAgregar");

    btnAgregar.addEventListener("click", agregarTarea);

};

function agregarTarea() {
    let nombre = document.getElementById("txtNombre").value;
    let descripcion = document.getElementById("txtArea").value;
    let tarea = {
        numTarea: numTarea,
        nombre: nombre,
        descripcion: descripcion,
        estado: true,
    };
    mostrarTabla(tarea);
    numTarea++;
    event.preventDefault();
};

function mostrarTabla(tarea) {
    var tabla = document.getElementById("tablaTareas"); 
    var fila = tabla.insertRow();
    var celdaNum = fila.insertCell();
    var celdaNombre = fila.insertCell();
    var celdaDescripcion = fila.insertCell();
    var celdaEstado = fila.insertCell();

    celdaNum.textContent = tarea.numTarea;
    celdaNombre.textContent = tarea.nombre;
    celdaDescripcion.textContent = tarea.descripcion;
    celdaEstado.textContent = tarea.estado ? "Completado" : "Pendiente";
};