// Event - событие изменения состояния браузера
// Обработчик события function - handler (обработчик), listener (слушатель), subscriber (подписчик)
// При наступлении события
// const event = new Event() = object with property about event
// function(event) - call function


// Find elem

const sd = document.getElementById('small');
const md = document.getElementById('medium');
const bd = document.getElementById('big');
function handler_1() {
   alert('small div')
}

function handler_2() {
   alert('Yooo')
}

//sd.onclick = handler_1; // Вешаем обработчик
//sd.onclick = null; // Снимаем обработчик

//sd.addEventListener('click', handler_1); //add
//sd.addEventListener('click', handler_2);  // add
//sd.removeEventListener('click', handler_1); // remove


// e.target - целевой элемент (который сгенерировал событие)
// e.currentTarget - элемент через который проходит событие (который вызвал обработчик)


function handler_3(e) {
   console.log(e.currentTarget.id)
}

sd.addEventListener('click', handler_3);
//md.addEventListener('click', handler_3);
//bd.addEventListener('click', handler_3);

// Делегирование событий
// Когда вешаем обработчик события на родителя и используем e.target, чтобы обратиться к элементу
// Вешаем функцию на родитель
function parentHandler(e) {
   if (e.target.tagName === 'BUTTON') {
      console.log(e.target.id)
   }
}


// Stop Propagation
function stopProp(e) {
   console.log(e.currentTarget);
   e.stopPropagation(); // останавливаем распространение события
}

// PreventDefault - отмена умолчательного поведения
const link = document.getElementById('a');
link.addEventListener('click', (e) => { e.preventDefault() })
