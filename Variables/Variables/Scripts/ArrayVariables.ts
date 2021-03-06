﻿let arrayOfStrings = ["str1", "str2", "str3"];

// myStr="str1"
let myStr = arrayOfStrings[0]; 

// compiler error
arrayOfStrings = [1, 2, 3];

// can contain any types like List<object> in C#
let arrayOfAny: any[] = [1, "str2", false];

// for any[] reassigning to an array 
// containing different types works fine
arrayOfAny = [true, 2, "str3"];

// another way to define array of strings
// by using Array<string>
let arrayOfStrings2: Array<string>;

// now arrayOfStrings2 contains ["str1", "str2", "str3", "str4"]
arrayOfStrings2 = [...arrayOfStrings, "str4"];

let i = 5;