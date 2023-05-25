// Lexical Environment
// Лексическое окружение -- объект (область видимости)
// {a:5, outer:null} global LE, где outer это ссылка на внешнее лексическое окружение
// const a = 5;

const car = 'bmw';

const startEngine = () => {
    console.log(`Start ${car}`)
}

startEngine();