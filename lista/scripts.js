

const lista = document.querySelector('.tareas')

const plantilla = tarea => {

    const html = `  <li class="list-group-item d-flex justify-content-between align-items-center tarea">


                    <span>${tarea}</span>
                    <i class="fa-solid fa-trash delete"></i>

</li>                                             `


    lista.innerHTML += html

}

//añadir una tarea nueva

const formularioAñadir = document.querySelector('.añadir')
formularioAñadir.addEventListener('submit', e => {

    e.preventDefault()

    let nuevaTarea = formularioAñadir.añadir.value.trim()
    console.log(nuevaTarea)

    if (nuevaTarea.length) {


        plantilla(nuevaTarea)

        formularioAñadir.reset()

    }


})



lista.addEventListener('click', e => {


    if (e.target.classList.contains('delete')) {

        e.target.parentElement.remove()
    }



})

//buscador evento de teclado

// const busqueda = document.querySelector('#buscar')

const tareaFiltrada = (busquedaUsuario) => {

    Array.from(lista.children).filter(task =>

        !task.textContent.toLowerCase().includes(busquedaUsuario)
    )
        .forEach(ftask => {

            ftask.classList.add('filtrados')
            ftask.classList.remove('d-flex')
        })

    Array.from(lista.children).filter(task => task.textContent.toLowerCase().includes(busquedaUsuario))
        .forEach(ftask => {



            ftask.classList.remove('filtrados')
            ftask.classList.add('d-flex')

        })



}


buscar.addEventListener('keyup', () => {

    let termino = buscar.value.trim().toLowerCase()
    tareaFiltrada(termino)



})

