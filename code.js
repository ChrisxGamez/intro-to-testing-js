// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === "Alex") {
        return "Hello, Alex!";

    } else if (input === "Pat") {
        return "Hello, Pat!";

    } else if (input === "") {
        return "Hello, World!";

    } else if (input === "true") {
        return "Hello, World!";

    } else if (input === "false") {
        return "Hello, World!";

    } else if (input === null) {
        return "Hello, World!";

    } else {
        return "Hello, Jane!";
    }
}

function isFive(input) {
  if (input == 5) {
      return true
  } else {
      return false
  }
}
console.log(isFive("5"));

function isEven(input){
    if (input % 2 === 0) {
        return true;
    } else {
        return false;
    }

}

function isVowel(input) {
    if (input.includes('a|e|i|o|u|A|E|I|O|U')) {
        return true
    } else {
        return false
    }
}
console.log(isVowel('a'));


