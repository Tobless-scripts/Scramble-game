const wordArray = [
{word: "big",hint: "something that is massive"},
{Word: "delicious",hint: "Tastes really good"},
{Word: "expensive",hint: "When the price of something is costly"},
{word: "expensive", hint: "When the price of something is costly"},
{word: "delicious", hint: "Tastes really good"},
{word: "knowledge", hint: "what you gain by learning and experience"},
{word: "adventure", hint: "an exciting or unusual experience"},
{word: "beautiful", hint: "pleasing to the eyes"},
{word: "mysterious", hint: "something hard to explain or understand"},
{word: "courageous", hint: "being brave in the face of danger"},
{word: "enthusiasm", hint: "intense and eager enjoyment"},
{word: "happiness", hint: "a feeling of joy or contentment"},
{word: "imagination", hint: "the ability to form new ideas or concepts"},
{word: "celebration", hint: "a joyful occasion for festivities"},
{word: "incredible", hint: "hard to believe; amazing"},
{word: "thoughtful", hint: "showing consideration for others"},
{word: "generosity", hint: "the quality of being kind and giving"},
{word: "grateful", hint: "feeling thankful or appreciative"},
{word: "inspiration", hint: "something that motivates or encourages"},
{word: "optimistic", hint: "having a positive outlook on life"},
{word: "persistent", hint: "continuing firmly despite difficulties"},
{word: "innovation", hint: "introducing something new or creative"},
{word: "adventure", hint: "an exciting or risky experience"},
{word: "harmonious", hint: "forming a pleasing or consistent whole"},
{word: "resilience", hint: "the ability to recover from difficulties"},
{word: "creativity", hint: "the use of imagination to create something"},
{word: "enthusiastic", hint: "showing intense enjoyment or interest"},
{word: "compassion", hint: "sympathy and concern for others' suffering"},
{word: "determination", hint: "a firm decision to achieve something"},
{word: "confidence", hint: "feeling sure of yourself and your abilities"},
{word: "curiosity", hint: "a desire to learn or know more"},
{word: "dedication", hint: "commitment to a task or purpose"},
{word: "ambitious", hint: "having a strong desire to succeed"},
{word: "friendship", hint: "a bond between people based on trust"},
{word: "brilliance", hint: "great intelligence or talent"},
{word: "impressive", hint: "evoking admiration through skill or quality"},
{word: "extraordinary", hint: "very unusual or remarkable"},
{word: "meticulous", hint: "showing great attention to detail"},
{word: "perseverance", hint: "persistence in doing something despite delay"},
{word: "wisdom", hint: "the ability to make sensible decisions"},
{word: "abundance", hint: "a very large quantity of something"},
{word: "compromise", hint: "an agreement reached by mutual concessions"},
{word: "admirable", hint: "deserving respect or approval"},
{word: "benevolent", hint: "well-meaning and kindly"},
{word: "vulnerable", hint: "open to harm or damage"},
{word: "fascinating", hint: "extremely interesting"},
{word: "ambiguous", hint: "open to more than one interpretation"},
{word: "insightful", hint: "having a deep understanding"},
{word: "remarkable", hint: "worthy of attention; extraordinary"},
{word: "sophisticated", hint: "having refined tastes or habits"},
{word: "transparent", hint: "easy to understand or perceive"},
{word: "authentic", hint: "genuine and real; not fake"},
{word: "passionate", hint: "having strong emotions or feelings"},
{word: "optimistic", hint: "hopeful and confident about the future"},
{word: "efficient", hint: "achieving maximum productivity with minimal effort"},
{word: "glorious", hint: "having great beauty or splendor"},
{word: "gratitude", hint: "the feeling of being thankful"},
{word: "ambition", hint: "a strong desire to achieve success"},
{word: "tranquility", hint: "the quality of being calm and peaceful"},
{word: "imaginative", hint: "having creativity or inventiveness"},
{word: "remarkable", hint: "worthy of notice or attention"},
{word: "compassionate", hint: "showing concern for others' well-being"},
{word: "persistent", hint: "continuing firmly despite difficulty"},
{word: "inclusive", hint: "including everyone and everything"},
{word: "empowerment", hint: "giving someone the confidence to do something"},
{word: "collaboration", hint: "working together with others"},
{word: "enthusiasm", hint: "intense and eager enjoyment"},
{word: "resourceful", hint: "able to deal with new or difficult situations"},
{word: "perceptive", hint: "having or showing keenness of insight"},
{word: "determined", hint: "having a strong resolve to achieve something"},
{word: "spontaneous", hint: "acting on impulse without planning"},
{word: "assertive", hint: "having confidence and not afraid to express it"},
{word: "effortless", hint: "achieving something without struggle"},
{word: "prestigious", hint: "having high status or reputation"},
{word: "compelling", hint: "evoking interest or attention"},
{word: "adaptable", hint: "able to adjust to new conditions"},
{word: "reliable", hint: "consistently good in quality or performance"},
{word: "adventurous", hint: "willing to take risks or try new experiences"},
{word: "flourishing", hint: "growing or developing in a healthy way"},
{word: "evolution", hint: "the gradual development of something"},
{word: "sympathetic", hint: "showing understanding and care for others"},
{word: "intuitive", hint: "understanding something instinctively"},
{word: "ambitious", hint: "strong desire for success or achievement"},
{word: "empathy", hint: "the ability to understand others' feelings"},
{word: "dynamic", hint: "characterized by constant change or activity"},
{word: "radiant", hint: "sending out light or energy"},
{word: "ingenious", hint: "clever, original, and inventive"},
{word: "compassion", hint: "sympathetic concern for others' suffering"},
{word: "charismatic", hint: "exercising a compelling charm"},
{word: "innovative", hint: "introducing new ideas or methods"},
{word: "insightful", hint: "having deep understanding"},
{word: "pragmatic", hint: "dealing with things sensibly and practically"},
{word: "resilient", hint: "able to recover from difficulties"},
{word: "versatile", hint: "able to adapt to different functions or activities"},
{word: "enthusiastic", hint: "showing great interest or excitement"},
{word: "perseverant", hint: "continuing effort despite difficulties"},
{word: "inclusive", hint: "covering all items, groups, or situations"},
{word: "harmonious", hint: "forming a pleasing and consistent whole"},
{word: "thoughtful", hint: "showing consideration for the needs of others"},
{word: "conscientious", hint: "wishing to do what is right"},
{word: "elaborate", hint: "involving many detailed parts"},
{word: "adaptable", hint: "able to change to suit new conditions"},
{word: "curiosity", hint: "a desire to learn or know about something new"},
{word: "decisive", hint: "able to make decisions quickly and effectively"},
{word: "supportive", hint: "providing encouragement and help"},
{word: "gregarious", hint: "enjoying the company of others"},
{word: "understanding", hint: "sympathetic awareness of others' feelings"},
{word: "forgiving", hint: "willing to forgive mistakes"},
{word: "determined", hint: "having a firm resolve to do something"},
{word: "purposeful", hint: "having or showing determination"},
{word: "respectful", hint: "showing politeness and consideration"}

    
];

function scrambleWords(word){
    return word.split('').sort(() => Math.random()-0.5).join('');
}
const randomIndex = Math.floor(Math.random()* wordArray.length);

const selectedWord = wordArray[randomIndex].word;

const selectedHint = wordArray[randomIndex].hint;

const scrambled = scrambleWords(selectedWord);

document.querySelector('.word').textContent = scrambled;

document.querySelector('.hint').innerHTML = selectedHint;

function checkAnswer() {
    const user = document.getElementById("userInput").value.toLowerCase();

    const result = document.getElementById("result");

    if (user === selectedWord) {
        result.innerHTML = "Congratulations, you win!"
        result.style.color = "green"
    }else{
        result.innerHTML = "Sorry, try to get the next one right!"
        result.style.color = "red"
    }
}










