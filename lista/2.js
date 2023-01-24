

// funcion de borrar
const lista = document.querySelector('.tareas')



lista.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {

        e.target.parentElement.remove()

    }

})



const plantilla = tarea => {


    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center tarea">


 <span>${tarea}</span>
 <i class="fa-solid fa-trash delete"></i>

</li>`


    lista.innerHTML += html


}

const formulario = document.querySelector('.añadir')

formulario.addEventListener('submit', e => {
    e.preventDefault()
    let nuevaTarea = formulario.añadir.value.trim()
    console.log(nuevaTarea)

    if (nuevaTarea.length) {

        plantilla(nuevaTarea)

        formulario.reset()

    }


})


//buscador



const tareaFiltrada = (busquedaUsuario) => {

    Array.from(lista.children).filter(task =>
        !task.textContent.toLowerCase().includes(busquedaUsuario)
    )
        .forEach(ftask => {

            ftask.classList.add('filtrados')
            ftask.classList.remove('d-flex')
            console.log(ftask)
        })
        

    Array.from(lista.children).filter(task =>

        task.textContent.toLowerCase().includes(busquedaUsuario)
        

    )

        .forEach(task => {
          
             task.classList.remove('filtrados')
             task.classList.add('d-flex')
        
            
              console.log(task)
         
        })



}




buscar.addEventListener('keyup', () => {


    let termino = buscar.value.toLowerCase()
    tareaFiltrada(termino)


})

