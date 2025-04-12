//1
let json5 = ["json1", "json2", "json3", "json4", "json5", "json6"]
let dfg = JSON.stringify(json5)
console.log(dfg)


let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
const jsonScript = JSON.stringify(json)

let users = ['user1', 'user2', 'user3', 'user4', 'user5']
//получить колекцию списков элементов и преобразовать ее в массив(Array.from)
let lists = Array.from(document.querySelectorAll(".list li"));

console.log(lists)
//перебрать все элементы списка и вернуть их текстовое содержание
const item = lists.map((list) => {
    return list.textContent
})
console.log(item)


const user = [{

    "name": "user1",
    "age": 25,
    "salary": 1000
},
{
    "name": "user2",
    "age": 26,
    "salary": 2000
},
{
    "name": "user3",
    "age": 27,
    "salary": 3000

}]

//2
const list = [
    {
        city1: "Москва"
    },
    {
        city2: "Питер"
    },
    {
        city3: "Тюмень"
    },

    {
        city4: "Омск"
    }



]

console.log(list)
const jsonStringify = JSON.stringify(list)
console.log(jsonStringify)



//4
let json2 = `[
    {
    "name": "user1",
    "age": 25,
    "salary": 1000
    },
    {
    "name": "user2",
    "age": 26,
    "salary": 2000
    },
    {
    "name": "user3",
    "age": 27,
    "salary": 3000
    }
    ]`;
//perse обратно
const employees = JSON.parse(json2);
const tbody = document.querySelector('#employesBody');

for (let employee of employees) {
    let tr = document.createElement('tr')
    tbody.appendChild(tr);
    tr.innerHTML = `
    <td>${employee.name}</td>
      <td>${employee.age}</td>
        <td>${employee.salary}</td>
    `
}


//5



/* Получите представленные данные в формате JSON в виде объекта с
ключами surname, name, patronymic. */


/* //найти все строки таблицы кроме 1 */
const rows = document.querySelectorAll('#task5 tr:not(:first-child)');

/* создать пустой масив для результатов */
const result = [];


//перебрать каждую строку в таблице 
rows.forEach((row) => {
    //найти все ячейки в каждой строке
    const cells = row.querySelectorAll('td')
    //создать обьект для 1 человека
    const person = {
        //первая ячейка фамилии
        surname: cells[0].textContent,
        //вторая ячейка
        name: cells[1].textContent,
        //третья ячейка отчество
        patronymic: cells[2].textContent
    }



    //добавить элементы в массив
    result.push(person)

})
//приоброзовать массив в json
const jsonResult = JSON.stringify(result)

console.log(jsonResult)



