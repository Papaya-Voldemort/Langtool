document.getElementById('translation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const englishText = document.getElementById('english-text').value;
    const translatedText = translateSentence(englishText);
    document.getElementById('translated-text').innerText = translatedText;
});

function translateSentence(sentence) {
    const vowels = "AEIOU";
    const emphasisChars = {"A": "á", "E": "é", "I": "í", "O": "ó", "U": "ú"};
    const punctuation = [",", "!", "?", "."];
    const words = sentence.split(' ');
    const translatedWords = words.map(word => {
        if (punctuation.includes(word)) {
            return word;
        }
        let count = 0;
        let newWord = "";
        for (let char of word) {
            if (char in vowels) {
                count += 1;
                if (count % 3 === 0) {
                    newWord += emphasisChars[char] + char;
                } else {
                    newWord += char;
                }
            } else {
                newWord += char;
            }
        }
        return echoLatinTranslate(newWord);
    });
    return translatedWords.join(' ');
}

function echoLatinTranslate(word) {
    const vowels = "AEIOU";
    if (word[0] in vowels) {
        const firstVowel = word[0];
        const swappedWord = word.slice(-1) + word.slice(1, -1) + word[0];
        return swappedWord.replace(firstVowel, firstVowel * 2, 1);
    } else {
        return word;
    }
}
