class Person implements IPerson
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

    // constructor taking two optional arguments
    constructor(firstName?: string, lastName?: string)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}

// instead of below, we can write
//let PrintFullName = (person: IFirstNameContainer & ILastNameContainer & IMiddleNameContainer) => ...

// defining a method (function)
// using error notations
let PrintFullName = (person: IPerson) =>
{
    let result: string = "";

    if (person.FirstName)
    {
        result += person.FirstName + " ";
    }

    if (person.MiddleName)
    {
        result += person.MiddleName + " ";
    } 

    if (person.LastName)
    {
        result += person.LastName;
    }

    alert(result);
}

PrintFullName(new Person("Joe", "Doe"));