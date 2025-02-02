// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Create arrays for story button
var nouns1 = ["The Turkey", "Mom", "Dad", "Dog", "my teacher", "The Elephant", "Cat"]; 
var verbs = ["sat on","ate","danced with","saw","doesn't like","kissed"]; 
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoe"];

// Constants for main button query selectors
const noun1Button     = document.getElementById("noun1");
const verbButton      = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective"); 
const noun2Button     = document.getElementById("noun2");
const settingButton   = document.getElementById("setting");

// Constants for p tag to display query selectors
const displayNoun1Selector     = document.getElementById("choosenNoun1"); 
const displayVerbSelector      = document.getElementById("choosenVerb");
const displayAdjectiveSelector = document.getElementById("choosenAdjective");
const displayNoun2Selector     = document.getElementById("choosenNoun2");
const displaySettingButton     = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playBackButton = document.getElementById("playback");
const randomButton   = document.getElementById("random");
const storyButton    = document.getElementById("story");

// gets a random element from the array: [code snippet found from lab1 javascript]
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}


/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    const getNouns1 = getRandomElement(nouns1); 
    //display the selected 
    displayNoun1Selector.textContent = getNouns1;
   
}

function verb_on_click() {
    // get element and display variable
    const getVerbs = getRandomElement(verbs); 
    //display the selected 
    displayVerbSelector.textContent = getVerbs; 
    
}

function adjective_on_click() {
    // get element and display variable 
    const getAdjectives = getRandomElement(adjectives); 
    // display the selected 
    displayAdjectiveSelector.textContent = getAdjectives; 
    
}

function noun2_on_click() {
    // get element and display variable 
    const getNouns2 = getRandomElement(nouns2); 
    // display the selected 
    displayNoun2Selector.textContent = getNouns2; 
    
}

function setting_on_click() {
    // get element and display variable 
    const getSetting = getRandomElement(setting);
    // display the selected 
    displaySettingButton.textContent = getSetting;    
}

// concatenate the user story and display
function playback_on_click() {
    const noun1     = displayNoun1Selector.textContent;
    const verb      = displayVerbSelector.textContent;
    const adjective = displayAdjectiveSelector.textContent;
    const noun2     = displayNoun2Selector.textContent;
    const setting   = displaySettingButton.textContent;

    var storyText = `Once upon a time, ${noun1} ${verb} ${adjective} ${noun2} ${setting}.`; 

    //display story 
    storyButton.textContent = storyText; 
    
}

// grabbing random element from arrays, concatenate and display [for random option]
function random_on_click() {
    const randomNoun1     = getRandomElement(nouns1);
    const randomVerb      = getRandomElement(verbs);
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun2     = getRandomElement(nouns2);
    const randomSetting   = getRandomElement(setting);

    //display story - concatenate string
    const randomStoryText = `Once upon a time, ${randomNoun1} ${randomVerb}  ${randomAdjective} ${randomNoun2} ${randomSetting}.`;

    //display story - assign to the button content 
    storyButton.textContent = randomStoryText; 
}

/* Event Listeners
-------------------------------------------------- */

//listener for noun1 
noun1Button.addEventListener("click", noun1_on_click);

//listener for verb
verbButton.addEventListener("click", verb_on_click);

//listener for adjective
adjectiveButton.addEventListener("click", adjective_on_click);

//listener for click 
noun2Button.addEventListener("click", noun2_on_click);

//listener for setting
settingButton.addEventListener("click", setting_on_click);

//listener for show story
playBackButton.addEventListener("click", playback_on_click);

//listener for random story 
randomButton.addEventListener("click", random_on_click);

/* display Student ID and name */ 
/* FUNCTION */
function displayStudentIdName(){
    var studentIdNameDisplay = document.getElementById("studentIdName"); 
    studentIdNameDisplay.textContent = "Name: Muskan Waraich | Student ID GEORGIAN: 200629599, STUDENT ID LAKEHEAD: 1269531.";
}
/* EVENT LISTNER TO DISPLAY */ 
var showStudentIdNameButton = document.getElementById("showStudentIdName"); 
showStudentIdNameButton.addEventListener("click", displayStudentIdName); //call the function if click heard