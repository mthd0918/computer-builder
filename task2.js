const jsonString = `
    [
        {
            "name": "Steve",
            "profession": "lawyer",
            "age": 30,
            "gender": "male"
        },
        {
            "name": "Jack",
            "profession": "tennis player",
            "age": 26,
            "gender": "male"
        },
        {
            "name": "Lisa",
            "profession": "UX designer",
            "age": 23,
            "gender": "female"
        }
    ]
`

const json = JSON.parse(jsonString);

console.log(json[0].name);
console.log(json[1].profession);
console.log(json[2].gender);