let arrayOfStrings = ["str1", "str2", "str3"];

// myStr="str1"
let myStr = arrayOfStrings[0]; 

// compiler error
arrayOfStrings = [1, 2, 3];

let arrayOfAny: any[] = ["str1", "str2", "str3"];

// works fine
arrayOfAny = [1, 2, 3];

// another way to define array of strings
// by using Array<string>
let arrayOfStrings2: Array<string>;

// now arrayOfStrings2 contains ["str1", "str2", "str3", "str4"]
arrayOfStrings2 = [...arrayOfStrings, "str4"];

let i = 5;