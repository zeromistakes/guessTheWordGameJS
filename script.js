const wordBank = ["слово", "мартышка", "пудж", "пиво", "жигуль", "олень", "мастерская", "лоб", "щука", "фильм", "ложка", "черепаха", "телефон", "диван", "автомат"];
const word = wordBank[Math.floor(Math.random() * wordBank.length)];

const answerArr = [];

for (let i = 0; i < word.length; i++) {
    answerArr[i] = '_';
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArr.join(' '));

    let guess = prompt('Угадайте букву или уходите!');
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Введите только одну букву!");
        } else {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    answerArr[i] = guess;
                    remainingLetters--;
                }
            } 
        }

}

alert(answerArr.join(" "));
 alert(`Отлично! Было загадано слово   ${word}`);

