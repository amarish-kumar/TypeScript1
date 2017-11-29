

let PrintFullName = (person: IPerson) =>
 {
    let result: string = "";

    if (person.FirstName)
    {
        result += person.FirstName + " ";
    }

    if (person.LastName)
    {
        result += person.LastName;
    }

    alert(result);
}

// create anonymous class
let person = new class implements IPerson
{
    private _firstName: string;
    get FirstName(): string
    {
        return this._firstName;
    }
    set FirstName(value: string)
    {
        this._firstName = value;
    }


    private _lastName: string;
    get LastName(): string
    {
        return this._lastName;
    }
    set LastName(value: string)
    {
        this._lastName = value;
    }

    constructor(firstName: string, lastName: string)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}("Joe", "Doe"); // call constructor

PrintFullName(person);