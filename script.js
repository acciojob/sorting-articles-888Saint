const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Words to ignore while sorting
const ignoreWords = ['a', 'an', 'the'];

// Function to strip ignored words from the beginning of a string
function strip(word) {
    return word.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands, ignoring the specified words
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// Populate the unordered list with sorted articles
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
