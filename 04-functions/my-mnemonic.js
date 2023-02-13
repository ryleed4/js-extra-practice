// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic(string1, string2, string3, string4){
    let mnemonic =""
    //for (let i=0; i < 4; i++) {}
    if(typeof string1 === 'string'){
        const firstLetter = string1[0]
        mnemonic += firstLetter
    }
    if(typeof string2 === 'string'){
        const firstLetter = string2[0]
        mnemonic += firstLetter
    }
    if(typeof string3 === 'string'){
        const firstLetter = string3[0]
        mnemonic += firstLetter
    }
    if(typeof string4 === 'string'){
        const firstLetter = string4[0]
        mnemonic += firstLetter
    }
    return mnemonic
}
// Do not change the code below this line
module.exports = { myMnemonic };
