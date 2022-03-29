let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Splits 'story' into individual words and saves them to new array called 'storyWords':
let storyWords = story.split(' ');

// Filters out words in 'unnecessaryWords' from 'storyWords':
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

// Counts the number of times words in 'overusedWords' appear in 'storyWords'
let overusedWordsCounter = 0;

storyWords.forEach(word => {
    if (overusedWords.includes(word)) {
        overusedWordsCounter++;
    }
});

// Counts the number of sentences in the paragraph:
let sentenceCounter = 0;

storyWords.forEach(word => {
    if (word.includes('.')) {
        sentenceCounter++;
    } else if (word.includes('!')) {
        sentenceCounter++;
    }
});

// Logging Items:
/*
    - Word Count
    - Sentence Count
    - Overused Word Count
*/

console.log(`This story contains ${storyWords.length} words.`);
console.log(`There are ${sentenceCounter} sentences in this story.`);
console.log(`'really', 'very', and 'basically' are considered overused words. They appear ${overusedWordsCounter} times in this story.`)
