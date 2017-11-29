class Employee extends Person
{
    private _employeeNumber: number;
    get EmployeeNumber()
    {
        return this._employeeNumber;
    }

    // property overriding sample
    get LastName() 
    {
        return "SuperCaleFlageolisticExpialodocios";
    }

    constructor(employeeNumber:number, firstName:string, lastName:string)
    {
        // call constructor of the super class
        super(firstName, firstName);

        this._employeeNumber = employeeNumber;
    }
}

function PrintPersonFullName(person: Person): void
{
    alert(person.FullName);
}

let joeDoeEmployee: Person = new Employee(1, "Joe", "Doe");

PrintPersonFullName(joeDoeEmployee);