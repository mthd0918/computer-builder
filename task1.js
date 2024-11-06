// name, job, age, gender

// Steve, lawyer, 30, male
// Jack, tennis player, 26, male
// Lisa, UX designer, 23, female

// この3人のデータをJSONとして表し、for-in構文を使って全員の情報をコンソールに表示しましょう。
const jsonString = `
[
    {
        "name": "Steve",
        "occupation": "lawyer",
        "age": 30,
        "gender": "male"
    },
    {
        "name": "Jack",
        "occupation": "tennis player",
        "age": 26,
        "gender": "male"
    },
    {
        "name": "Lisa",
        "occupation": "UX designer",
        "age": 23,
        "gender": "female"
    }
]`;

const persons = JSON.parse(jsonString);

for (const person of persons) {
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    console.log('---');
}