// Class
// const car1 = {
//     brand:'bmw',
//     maxSpeed:200,
//     startEngine(){
//         console.log(`Start ${this.brand}`)
//     }
// }
// const car2 = {
//     brand:'audi',
//     maxSpeed:220,
//     startEngine(){
//         console.log(`Start ${this.brand}`)
//     }
// }
// Проблема, при создании однотипных объектов, происходит дублирование

// function createCar(brand,maxSpeed){
//     const car = {
//         brand,
//         maxSpeed,
//         startEngine(){
//             console.log(`Start ${this.brand}`)
//         }
//     }
//     return car
// }

// Вариант использования функции фабрики
// но есть минус, здесь для каждого объекта создается свой метод (функция), что неэкономно
// для памяти
// const car = createCar('mersedes', 240)
// console.log(car);
// {
//     brand: 'mersedes',
//         maxSpeed: 240,
//     startEngine: [Function: startEngine]
// }


// Функция конструктор
// function Car(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     // При такой записи, каждый раз будет создаваться функция для объекта
//     // что также будет плохо
//     // необходимо записать метод в прототип
//     this.startEngine = function () {
//         console.log(this.brand)
//     }
// }
//
// const car = new Car('bmw', 300)
// console.log(car)
/*Car {
    brand: 'bmw',
        maxSpeed: 300,
        startEngine: [Function (anonymous)]
}*/
// метод startEngine_2 записываем в прототип
// Car.prototype.startEngine_2 = function (){
//     console.log(`Start ${this.brand}`)
// }
// const car_2 = new Car('audi', 200)
// // console.log(car_2)                           // метода startEngine_2 не будет он в прототипе
// console.log(Car.prototype)                      // {startEngine_2: ƒ, constructor: ƒ}


// Классы

// class Car{
//     constructor(brand, maxSpeed) {
//         this.brand=brand;
//         this.maxSpeed = maxSpeed;
//     }
//     // В классе методы сразу записываются в прототип
//     startEngine(){
//         console.log(`Start ${this.brand}`)
//     }
//     // При такой записи метод запишется в объект, что не хорошо, лучше методы записывать как
//     // function declaration
//     showMaxSpeed = () => {
//         console.log(this.maxSpeed)
//     }
// }
//
// const car  = new Car('bmw', 250)
// console.log(car)
// // Car { brand: 'bmw', maxSpeed: 250 }
// console.log(car.showMaxSpeed())

// class Car {
//     // Создаем приватное свойство
//     #brand;
//     #maxSpeed
//     constructor(brand,maxSpeed) {
//         this.#maxSpeed = maxSpeed;
//         // В конструкторе определяем значение этого свойства
//         this.#brand = brand
//     }
//     // Через метод класса мы можем добраться к приватному свойству, и производить дополнительные проверки
//     startEngine(){
//         console.log(`Start ${this.#brand}`)
//     }
//     // Также через метод класса мы можем изменить приватное свойство, и производить дополнительные проверки
//     changeBrand(newBrand){
//         this.#brand= newBrand
//     }
//
//
//     // использование геттеров и сеттеров
//     get maxSpeed(){
//         return  this.#maxSpeed
//     }
//     set maxSpeed(speed){
//         this.#maxSpeed=speed
//     }
// }
//
//
// const car1 = new Car('bmw',240)
// // Свойство бренд не видно снаружи и к нему нельзя обратиться напрямую
// console.log(car1)                               // Car { maxSpeed: 240 }
// car1.startEngine()                              // Start bmw
// car1.changeBrand('mersedes')
// car1.startEngine()                              // Start mersedes
//
// // Через геттеры и сеттеры читаем и изменяем приватные свойства
// console.log(car1.maxSpeed)          // 240 до изменения
// car1.maxSpeed = 340
// console.log(car1.maxSpeed)          // 340 после изменения


class Car {
    constructor(brand, speed) {
        this.brand=brand;
        this.speed= speed
    }
}
// Наследуемся от Car
class SuperCar extends Car{
    constructor(brand, speed, isCanFly) {
        super(brand, speed);
        this.isCanFly = isCanFly
    }
}
const car = new SuperCar('bmw', 350, true)

console.log(car)            // SuperCar { brand: 'bmw', speed: 350, isCanFly: true }
