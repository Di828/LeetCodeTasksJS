var isPalindrome = function(s) {
    let phrase = s.replace(/[\W_]/g,'').toLowerCase();
    let reversedPhrase = phrase.split('').reverse().join('');    
    return phrase == reversedPhrase;
};