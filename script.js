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
    'An Old Dog', 
    'Anywhere But Here'
];

// Words to ignore while sorting
const ignoreWords = ['a', 'an', 'the'];

// Function to strip ignored words for sorting
function stripWord(band) {
    return band.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring specified words
const sortedBands = bands.sort((a, b) => stripWord(a).localeCompare(stripWord(b)));

// Get the list element and render sorted bands
const bandList = document.getElementById('band');
bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
