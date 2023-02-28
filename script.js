let min = +prompt('Введите минимальное число диапазона')
let max = +prompt('Введите максимальное число диапазона')

function num (num1, num2){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

for (let i = 0; i < 6; i++) {
    let rundNum1 = num(min, max)
    let rundNum2 = num(min, max)
    let primer = +prompt(rundNum1 + ' + ' + rundNum2 + '= ?')
    let answer = (rundNum1 + rundNum2) == primer ? 'Молодец' : 'Ошибка'

    alert(rundNum1 + ' + ' + rundNum2 + ' =' + (rundNum1 + rundNum2) + ' Ваш ответ ' + primer + '. ' + answer)


    rundNum1 = num(min, max)
    rundNum2 = num(min, max)
    primer = +prompt(rundNum1 + ' - ' + rundNum2 + '= ?')
    answer = (rundNum1 - rundNum2) == primer ? 'Молодец' : 'Ошибка'

    alert(rundNum1 + ' - ' + rundNum2 + ' =' + (rundNum1 - rundNum2) + ' Ваш ответ ' + primer + '. ' + answer)


    rundNum1 = num(min, max)
    rundNum2 = num(min, max)
    primer = +prompt(rundNum1 + ' * ' + rundNum2 + '= ?')
    answer = (rundNum1 * rundNum2) == primer ? 'Молодец' : 'Ошибка'

    alert(rundNum1 + ' * ' + rundNum2 + ' =' + (rundNum1 * rundNum2) + ' Ваш ответ ' + primer + '. ' + answer)


    rundNum1 = num(min, max)
    rundNum2 = num(min, max)
    primer = +prompt(rundNum1 + ' / ' + rundNum2 + '= ?')
    answer = (rundNum1 / rundNum2) == primer ? 'Молодец' : 'Ошибка'

    alert(rundNum1 + ' / ' + rundNum2 + ' =' + (rundNum1 / rundNum2) + ' Ваш ответ ' + primer + '. ' + answer)


}


let name = prompt('Введите ваше имя')
let bYear = +prompt('Введите год вашего рождения')
let year = +prompt('Введите нынешний год')

function age (name, bYear, year) {
    let answer = year - bYear
    return answer
    
}
alert(name + ', ' + 'Ваш возраст: ' + (year - bYear) + ' лет')