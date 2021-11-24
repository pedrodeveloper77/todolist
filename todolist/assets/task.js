    import ButtonConclude from './components/concludeTask.js'
    import ButtonDelete from './components/deleteTask.js'

    const CreateTask = (e) => {
    e.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const value = input.value
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li')

    task.classList.add('task')

    const content = `<p class="content">${value}</p>`
    task.innerHTML = content

    list.appendChild(task)
    task.appendChild(ButtonConclude())
    task.appendChild(ButtonDelete())
    input.value = " "
}

    const newTask = document.querySelector('[data-form-button]')

    newTask.addEventListener('click', CreateTask)
