import inquirer from "inquirer";

class Student {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}

class Person {
    students: Student[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();

const programStart = async (persons: Person) => {
    while (true) {
        console.log("Welcome guest");

        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Who would you like to talk to?",
            choices: ["yourself", "student"]
        });

        if (ans.select === "yourself") {
            console.log("Hi I'm talking to myself");
            console.log("I'm fine");
        } else if (ans.select === "student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Who do you have to talk to?"
            });

            let student = persons.students.find(val => val.name === ans.student);

            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello, I'm ${name.name}, I'm good`);
                console.log(persons.students);
            } else {
                console.log(`Hello, I'm ${student.name}, I'm good.............`);
                console.log(persons.students);
            }
            
        }
    }
};

programStart(persons);
