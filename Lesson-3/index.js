// Обработка событий

// При возникновении события браузер генерирует событие EVENT - это событие

const sm  = document.getElementById('small');

const onclickHandler1 = (e) =>{
alert('onclickHandler1')
}

const onclickHandler2 = (e) =>{
    alert('onclickHandler2')
}

// При такой записи можно повесить только однну функцию обработчик на событие
sm.onclick = onclickHandler1; // Вешаем обработчик
sm.onclick = null; // Отвязываем обработчик

// При такой записи можно вешать несколько обработчиков
sm.addEventListener('click', onclickHandler2); // Вешаем обработчик
sm.removeEventListener('click', onclickHandler2); // Отвязываем обработчик