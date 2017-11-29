﻿class Person
{
    //#region
    // read-write property FirstName
    private _firstName: string;
    get FirstName(): string
    {
        return this._firstName;
    }
    set FirstName(value: string)
    {
        this._firstName = value;
    }
    //#endregion

    //#region
    // read-write property LastName
    private _lastName: string;
    get LastName(): string
    {
        return this._lastName;
    }
    set LastName(value: string)
    {
        this._lastName = value;
    }
    //#endregion

    // read-only property FullName
    get FullName(): string 
    {
        let result: string = "";

        if (this.FirstName) 
        {
            result += this.FirstName;
            result += " ";
        }

        if (this.LastName)
        {
            result += this.LastName;
        }

        return result;
    }

    // constructor taking two optional arguments
    constructor(firstName?: string, lastName?: string)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}


//let person = new Person("Joe", "Doe");

//alert(person.FullName);

let people: Array<Person>;

// create an array of Person objects
people = [new Person("Joe", "Doe"), new Person("Jane", "Dane")];

let result: string = "";

for (let person of people)
{
    result += person.FullName + "\n";
}

alert(result);