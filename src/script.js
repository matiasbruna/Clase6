window.onload = iniciar;

let numTarea = 1;
var tareas = [];

function iniciar() {
  let btnAgregar = document.getElementById("btnAgregar");

  btnAgregar.addEventListener("click", agregarTarea);
}

function agregarTarea(event) {
  event.preventDefault();
  let nombre = document.getElementById("txtNombre").value;
  let descripcion = document.getElementById("txtArea").value;
  let tarea = {
    nombre: nombre,
    descripcion: descripcion,
    estado: true,
  };
  tareas.push(tarea); // Agregar tarea al arreglo
  mostrarTabla(); // Actualizar tabla con todas las tareas
  limpiarCampos(); //Limpia los campos del formulario Agregar.
}

function mostrarTabla() {
  var tabla = document.getElementById("tablaTareas");
  tabla.innerHTML = ""; // Limpiar contenido actual de la tabla
  cargarNombresColumnas(); //Carga el nombre de cada columna despues de borrar la tabla.
  for (let i = 0; i < tareas.length; i++) {
    var fila = tabla.insertRow();
    var celdaId = fila.insertCell();
    var celdaNombre = fila.insertCell();
    var celdaDescripcion = fila.insertCell();
    var celdaEstado = fila.insertCell();
    celdaId.textContent = i + 1;
    celdaNombre.textContent = tareas[i].nombre;
    celdaDescripcion.textContent = tareas[i].descripcion;
    celdaEstado.textContent = tareas[i].estado ? "Completado" : "Pendiente";
  }
}
function cargarNombresColumnas() {
  var tabla = document.getElementById("tablaTareas");
  var fila = tabla.insertRow();
  var celdaId = fila.insertCell();
  var celdaNombre = fila.insertCell();
  var celdaDescripcion = fila.insertCell();
  var celdaEstado = fila.insertCell();
  celdaId.textContent = "Id";
  celdaNombre.textContent = "Nombre";
  celdaDescripcion.textContent = "descripcion";
  celdaEstado.textContent = "Estado";
}
function limpiarCampos() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtArea").value = "";
}
