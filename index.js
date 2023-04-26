const inputElement = document.getElementById('input-paragraph');
const outputElement = document.getElementById('output-paragraph');

inputElement.addEventListener('input', () => {
    const inputParagraph = inputElement.value;
    const words = inputParagraph.split(' ');
    const boldWords = words.map(word => {
        const length = Math.ceil(word.length * 0.5);
        const boldLetters = word.substring(0, length);
        const remainingLetters = word.substring(length);
        return `<strong>${boldLetters}</strong>${remainingLetters}`;
    });
    const outputParagraph = boldWords.join(' ');
    outputElement.innerHTML = outputParagraph;
});