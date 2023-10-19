import React from 'react'

const JavaScriptInterview = () => {

    // 1. given a string, reverse each word in the sentence
    const reversedStr = () => {
        let str = "My name is kajol";
        let savedStr = str.split(" ").map((word) => {
            return (
                word.split("").reverse().join("")
            )
        })
        let reversedStr = savedStr.join(" ");
        return console.log(reversedStr)
    }

    // 2. how to check if an obj ia an array or not
    const arratOrObj = (elem) => {
        // we can't use typeOf method beacause it always return an array like 
        // 1. typeof([]) will return 'object' 
        // 2. typeof({}) will return 'object'

        //then will use Array.isArray() method to check array or not

        return Array.isArray(elem);
    }

    // 3. how to empty an array in JS? 
    const emptyArray = () => {
        // don't use reset it to new array and don't loop through to pop each value

        let arr = [1, 2, 3, 4, 5];
        // dont reset empty it like arr = [];
        arr.length = 0;
        console.log(arr);
    }

    // 4. how would you check if the number is integer or not?
    const checkInt = (num) => {

        //there are two methods 
        // first Number.isInteger()
        Number.isInteger(num)

        // with moduler sign % 
        if (num % 1 === 0) {
            console.log("integer");
        } else {
            console.log("not a integer")
        }
    }

    // 5. how to make duplicate of given?
    // duplicate([1,2,3,4,5]); like [1,2,3,4,5,1,2,3,4,5]
    const duplicate = (arr) => {
        console.log(arr.concat(arr)) // i m using concat the array ele
    }

    // 6. write a js func that reverse a number?
    const reverseNumber = (num) => {
        //one way 
        let reverseNum = Number(num.toString().split("").reverse().join(""));
        console.log(reverseNum, "using js methods reverse num");
        // second way using loop
        let revNum = 0;
        while (num > 0) {
            let rem = num % 10;
            revNum = revNum * 10 + rem;
            num = Math.floor(num / 10);
        }
        console.log(revNum, "using loop reverse num")

    }
    // 7. write a js func that checks wheter a passes string is palindrome or not?
    const checkStrPal = (str) => {
        let palStr = str.split("").reverse().join("");
        if (palStr === str) {
            console.log("its a palindrome");
        } else {
            console.log("not a palindrome")
        }

        // using for loop
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                console.log("not a palindrome using loop")
                return false
            }
            console.log("its a palindrome using loop")
            return true
        }
    }

    // 8. write a js func that checks wheter a passes string with letters in alphabetical order?
    const alphabeticalStr = (str) => {
        return str.split("").sort().join("");
    }

    // 9. write a js func that accepts a string as a parameter and converts the first letter of each word of the string in upper case?
    const strFirstWordUppercase = (str) => {
        let allWords = str.split(" ").map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        console.log(allWords.join(" "))
    }

    // 10. write a js func to get the number of occurences of each letter in specific string?
    const occurences = (str) => {
        let obj = {};
        str.split("").forEach((ele) => {
            if (!obj.hasOwnProperty(ele)) {
                obj[ele] = 1;
            } else {
                obj[ele]++
            }
        })
        return obj;
    }

    // 11. loop an array and add all elements of it?
    const addAllEleOfArr = (arr) => {
        let sum = 0;
        arr.forEach((ele) => {
            sum = sum + ele;
        })
        return sum;
    }

    // 12. ?
    const addOnlyNumOfArr = (arr) => {
        let sum = 0;
        arr.forEach((ele) => {
            if (typeof (ele) === "number") {
                sum = sum + ele;
            }
        })
        return sum;
    }

    // 13. ?
    const removeNonMaleObjFromArr = (arr) => {
        let sum = 0;
        arr.forEach((ele) => {
            if (typeof (ele) === "number") {
                sum = sum + ele;
            }
        })
        return sum;
    }

    //14. write a js func to clone an array?
    const cloneArr = (arr) => {
        console.log([...arr], "cloned arr using spred operator")

        // second method
        let newArr = [];
        arr.map((ele) => {
            newArr.push(ele)
        })
        console.log(newArr, "cloned arr using map")
    }

    //15. write a js fun which accepts an argument and returns the type NOte :  There are six possible values that typeOf returns: obj, boolean, function, number, string, and undefined?
    const typeTeller = (value) => {
        console.log(typeof (value), "type of a given value")
    }

    //16. write a js fun to get the first ele of an arr. passing a parameter "n" will return the first "n" elements of array?


    // Difference between normal function and arrow function in JavaScript?
    //1. This Keyword : Normal function has this keyword to represent its own obj created bydefault to access its parent class object but in Arrow functions dosent have the argument obj.

    function normalFuncDefaultObj() {
        return this;
    }

    const arrowFuncDefaultObj = () => {
        console.log(this, "arrowFuncObj");
    };

    console.log(normalFuncDefaultObj, "normaFuncObj") // will print whole obj
    arrowFuncDefaultObj(); // will print undefined

    //2. Hoisting : Normal functions are hoisted which means we can call it before even initialised or declared But in arrow function we cant do this

    //3. Implicit Return : Normal function doesn't have its own implicit return which means you should have to return value but Arrow functions have its implicit return which means you dont need to return a value 
    function normalFuncImplicitReturn(x, y) {
        return x + y;
    }

    const arrowFuncImplicitReturn = (x, y) => x + y;

    console.log(normalFuncImplicitReturn(2, 5));
    console.log(arrowFuncImplicitReturn(3, 5));

    // function calls
    reversedStr();
    console.log(arratOrObj([]));
    console.log(arratOrObj({}));
    emptyArray();
    checkInt(2); // will print a integer
    checkInt(2.1); // will print not a integer
    duplicate([1, 2, 3, 4, 5]) // will print duplicate elements
    reverseNumber(12345); // will revrse the num
    checkStrPal("nitin"); // will print palindome 
    checkStrPal("loop"); // will print not a palindrome
    console.log(alphabeticalStr("hello")); // will print alphabetical order str
    strFirstWordUppercase("hello i m kajol singh"); // will print first letter in upper case
    console.log(occurences("apple")); // will print total number of occurences of a letter
    console.log(addAllEleOfArr([1, 2, 3, 4, 5])); // will print total of each ele of arr
    console.log(addOnlyNumOfArr([1, "hello", "khelo", 20, 4, "looto", 5])); // will print only total of occurences of a number
    cloneArr([1, 2, 3, 4]); // will print the given arr

    return (
        <div>
        </div>
    )
}

export default JavaScriptInterview
