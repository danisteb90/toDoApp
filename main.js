const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');

function addTask(){
    if (inputBox.value === ''){
        return alert('Add something to do')
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.textContent = '\u00d7'
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
        saveData();
    }
})

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    const task = listContainer.innerHTML;
    localStorage.setItem('Data', task)
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem('Data');
}

loadData();
