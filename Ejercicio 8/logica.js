// Listener para captar lo que ocurra en la página
document.addEventListener(
    'DOMContentLoaded', 
    function() {
        //Obtener la referencia de los elementos HTML
        const txtTarea = document.getElementById('nuevaTarea');
        const btnAgregar = document.getElementById('agregarTarea');
        const listTareas = document.getElementById('listaTareas');

        function agregarTarea() {
            // Validación para tareas vacías
            const tareaText = txtTarea.value.trim();
            if(tareaText === '') {
                alert('No se ha escritó ninguna tarea, para ser agregada');
                return;
            }

            // Crear Elementos de la lista
            const nuevaTarea = document.createElement('li');
            nuevaTarea.textContent = tareaText;

            // Crear botón para remover las tareas
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.addEventListener(
                'click', 
                function() {
                    listTareas.removeChild(nuevaTarea);
                }
            );// Listener del botón eliminar


            // Añadir botón al elemnto <li>
            nuevaTarea.appendChild(btnEliminar);
            // Agregar la tarea a la lista
            listTareas.appendChild(nuevaTarea);
            // Limpiar txtTarea
            txtTarea.value = '';
        
        }// Agregar tarea

        // Agregar la tarea cuando se haga clic en el botón  
        btnAgregar.addEventListener('click', agregarTarea);
        // o cuando se presiona enter
        txtTarea.addEventListener(
            'keypress',
            function(event) {
                if (event.key === 'Enter') {
                    agregarTarea();
                }
            }
        )// Listener txtTarea



    }// Función anónima

)// Fin del listener