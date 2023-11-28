const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')
const currentText = document.querySelector(".currentText")
const newText = document.querySelector(".newText")


const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('Произошла ошибка, введите какой-нибудь текст')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.innerText = 'DELETE'

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    editButton.innerText = 'EDIT'

    const text = document.createElement('h3')
    text.innerText = input.value
    text.addEventListener('click', ()=>{
        text.classList.toggle('toggle')
    })

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    todoList.prepend(div)

    // Удаление таска
    deleteButton.addEventListener("click", ()=>{
        div.remove();
    })

    // Создание модального окна
    const modalWindow = document.createElement("div");
    modalWindow.setAttribute('class', 'modal_window hideModal')

    const currentText = document.createElement("input");
    currentText.setAttribute('class', 'currentText')
    currentText.value = text.innerText

    const newText = document.createElement("input");
    newText.setAttribute('class', 'newText')

    const okBtn = document.createElement("button");
    okBtn.setAttribute('class', 'confirm')
    okBtn.innerText = "ok";

    modalWindow.append(currentText, newText, okBtn)
    div.append(modalWindow)

    editButton.onclick = () => {
        modalWindow.classList.remove("hideModal")
    }

    okBtn.onclick = () => {
        if(newText.value.trim() === ''){
            return alert('Произошла ошибка, введите какой-нибудь текст')
        }
        text.innerText = newText.value;
        modalWindow.classList.add("hideModal");
    }

    input.value = '';
}

createButton.onclick = () => createTodo()
window.onkeydown = (event)=>{
    if(event.code === 'Enter'){
        createTodo()
    }
}

