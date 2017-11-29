let myNumber: number;

let myString: string;

let myAny1: any = null;

// no type specified === any
let myAny2; 

// initialised
let myBool1 = true;

// type specified and initialization
let myBool2: boolean = false;

// compiler error
// cannot reassign the type to 'number'
myString = 5; 

myAny1 = 5; //OK

myAny2 == "hello world";

// any can be reassigned any type (like object in C#)
myAny1 = "Hi";

