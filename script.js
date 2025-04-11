//1
let json5 = ["json1", "json2", "json3", "json4", "json5", "json6"]
let dfg = JSON.stringify(json5)
console.log(dfg)
//5
let ff = `[
    {
        "surname": "Иванов",
        "name": "Иван",
        "patronymic": "Иванович"

    },


    {
        "surmane": "Петров",

        "name": "Петров",
        "patronymic": "Петрович"
    },

    {
        "surname": "Сидоров",
        "name": "Сидор",
        "patronymic": "Сидорович"


    }
]`

console.log(JSON.parse(ff))




let json = `['user1', 'user2', 'users', 'user4', 'user5']`;
const jsonScript = JSON.stringify(json)
let users = ['user1', 'user2', ' user3', 'user4', 'users5']

let lists = Array.from(document.querySelectorAll(" .list li"));
console.log(lists)
const item = lists.map((list) => {
    return list.textContent
})
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
"name":"user1",
"age":25,
"salary":1000
},
{
"name":"user2",
"age":26,
"salary":2000
},
{
"name":"user3",
"age":27,
"salary":3000
}
]`;

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

