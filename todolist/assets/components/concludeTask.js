const ButtonConclude = () => {
const buttonConclude = document.createElement('button')

    buttonConclude.classList.add('check-button')
    buttonConclude.innerText = 'concluir'

    buttonConclude.addEventListener('click', ConcludeTask)

    return buttonConclude
}

const ConcludeTask = (e) => {
const buttonConclude = e.target
const taskComplete = buttonConclude.parentElement
    taskComplete.classList.toggle('done')
}

export default ButtonConclude