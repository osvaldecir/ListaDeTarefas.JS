const form = document.querySelector('#todo-form')
const taskTitleInput = document.querySelector('#task-title-input')
const todoListUL = document.querySelector('#todo-list')

let tasks = []

form.addEventListener('submit', (event) => {
    event.preventDefault() //evita o comportamento padrao//
    const taskTitle = taskTitleInput.value

    if (taskTitle.length < 3) {
        alert('sua tarefa precisa ao menos de 3 caracteres')
        return
    }
    tasks.push({
        title: taskTitle,
        done: false,
    )}
    //adicionando  a nova tarefa no html//
    const li = document.createElement('li')

    const input = document.createElement('input')

    input.setAttribute('type','checkbox')

    const span = document.createElement('span')
    span.textContent = taskTitle

    const button = document.createElement('button')

    button.textContent = 'remover'

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)    

    todoListUL.appendChild(li)

    taskTitleInput.value = ''



