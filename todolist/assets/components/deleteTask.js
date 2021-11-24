const ButtonDelete = () => {
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'excluir'
    buttonDelete.classList.add('delete-button')
    buttonDelete.addEventListener('click', DeleteButton)
    return buttonDelete
}

const DeleteButton = (e) => {
    const deleteButton = e.target
    const deleteTask = deleteButton.parentElement
    deleteTask.remove()
}

export default ButtonDelete