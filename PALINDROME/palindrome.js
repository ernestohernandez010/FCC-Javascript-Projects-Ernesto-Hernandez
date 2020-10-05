let a = "racecar";
console.log(a);
isPalindromeEasyDumb(a);


let b = "dog";
console.log(b);
isPalindromeEasyDumb(b);


let c = "anna";
console.log(c);
isPalindromeEasyDumb(c);


let d = "Civic";
console.log(d);
isPalindromeEasyDumb(d);


let e = "Kayak"
console.log(e);
isPalindromeEasyDumb(e);


let f = "civIc"
console.log(f);
isPalindromeEasyDumb(f);




//Simple Easy reverse of a string to directly compare to input
function isPalindromeEasyDumb(word){

    let splitWord = word.split();
    let reversedArray = splitWord.reverse();
    let newWord = reversedArray.join();

    if(newWord == word)
    {return console.log( newWord + " is an EASY Palindrome of " + word);}

    else
    {return console.log("NOT AN EASY PALINDROME");}

}

//function is PalindromeEasySmart(word)



function isPalindromeIntSmart(string){
    
    let reverseString = "";

    for (var i = string.length - 1; i >= 0; i--) { 
        reverseString += string[i];
    }

    if( reverseString == string)
    {return console.log(reverseString + " is a SMARTER Palindrome of " +string);}

    else
    {return console.log("NOT A SMARTER PALINDROME");}



}
