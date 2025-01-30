const listElement = document.getElementById('list')
const input = document.getElementById('title')
const createBtn = document.getElementById('create')


/*
 Его не удалять, без него функционал не работает, т.к. завязан на нём. 
Можно добавить тут в коде данные с key:value (key: title:'', key:completed:false)
Или ничего не добавлять
*/
const mass = [
    
]

// Вывести мой массив на экран
function render () {
    listElement.innerHTML = ''
    if (mass.length === 0) {
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for(let i = 0; i < mass.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoneTemplate(mass[i], i))
    }
     
    }
    /* Современный вариант цикла в данном случае
    for (let note of array) {
        listElement.insertAdjacentHTML('beforeend', getNoneTemplate(note))
    }
    */
render(mass)

// Добавлять элемент из инпута, когда нажимаешь кнопку
createBtn.onclick = function () {
    if(input.value.length === 0) {return}
    const newNote = 
    {
        title: input.value,
        completed: false
    }
    mass.push(newNote)
    render()
    input.value = ''
}


/* Обрабатывает все объекты которые принимаются, с помощью event.target, 
.dataset в этом случае извлекает из объекта ключи и значение
*/
listElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            mass[index].completed = !mass[index].completed 
        } else if (type === 'remove') {
            mass.splice(index, 1)
        }

        render()
    }

    
}

// Получить шаблон заметки
function getNoneTemplate(note, index) {
    return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <span>
            <span class="btn btn-small btn-${
                note.completed ? 'warning' : 'success'
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
        </span>
        </li>`
}


