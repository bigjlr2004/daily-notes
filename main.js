// /*
//     Define a variable named `notes` and assign a value of an empty array
// */

// const notes = [
//     {
//         id: 1,
//         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a scelerisque purus, 
//         eget dictum ligula. Nulla interdum ex non urna vestibulum, sit.`,
//         author: " Charlie Brown",
//         date: "11/07/2022 ",
//         topics: [ "observation", "learning", "feeling", "reflection"]
//     },
//     {
//         id: 2,
//         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a scelerisque purus, 
//         eget dictum ligula. Nulla interdum ex non urna vestibulum, sit.` ,
//         author: "John Doe",
//         date: "11/01/2022 ",
//         topics: [ "task", "confusion", "important", "need to study", "extraordinary"]
//     }
// ];

// //Add at least three more notes using the .push method on the notes array.

// const newNote1 =  {
//     id: 3,
//     text: "Review all my old code before asking for help or looking at hints.", 
//     author: "Michael Jackson",
//     date: "11/01/2000",
//     topics: ["task", "important", "reminder"] 
// }


// const newNote2 =  {
//     id: 4,
//     text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.", 
//     author: "Kris Kringle",
//     date: "11/15/2000",
//     topics: ["task", "unimportant", "reminder"] 
// }

// const newNote3 =  {
//     id: 5,
//     text: "Need to have all my code backed up to Github by the end of the week.", 
//     author: "Harry Potter",
//     date: "11/15/2000",
//     topics: ["interesting", "unimportant", "Secret"] 
// }

// notes.push(newNote1, newNote2, newNote3);

// // In this chapter you will need to write a for..of loop inside of another one since the topics on each note is an array as well.



// // Start with console.log("*** All Note Topics ***") and display each topic beneath it.




// console.log("*** All Note Topics ***")
// for(const note of notes){
//     for(const topic of note.topics){

//         console.log(topic);

//     }


// } 
// // Add a new section of output where you can see, on average, how many topics the author are applying to each post.
// // I need to count the number of topics on each topic array.
// //I need to add that count to a variable.

// //I need to divide that number by the total number of notes.


// // Start with console.log("*** Average Topics Per Note ***") and display the average numbers of topics used on all posts.


// console.log("*** Average Topics Per Note ***")
// let totalTopics = 0;
// let averageTopics = 0;

// for(const note of notes){
//         totalTopics += note.topics.length
//     }
//     //log the total topics submitted divided by the notes.length to get the average topics per note
//     console.log(totalTopics/notes.length)

const notes =
    [
        {
            id: 1,
            topics: ["strategy", "professional", "help"],
            text: "Review all my old code before asking for help or looking at hints.",
            author: "Samantha Maas",
            date: "2020-11-09"
        },
        {
            id: 2,
            topics: ["thinking", "help"],
            text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
            author: "Gib Jeffries",
            date: "2021-01-18"
        },
        {
            id: 3,
            topics: ["reminder", "github"],
            text: "Need to have all my code backed up to Github by the end of the week.",
            author: "Rebecca Parker",
            date: "2021-02-25"
        },
        {
            id: 4,
            topics: ["strategy", "github"],
            text: "Always work on a branch and submit a PR, even if I'm working on my own project.",
            author: "Red Tilson",
            date: "2020-11-25"
        }
    ]

//Your task in this chapter is to filter all of the notes to find only
// the ones that have a specific topic assigned to it. 

//Create a new variable called filteredNotes with an empty array as its initial value.
const filteredNotes = [];
//Create a new variable called criteria the contains a string of the topic by which you want to filter the notes.
const criteria = "strategy";

// Then you iterate the notes array and check if the criteria is in the topics array property. 
for (const note of notes) {
    /*
        If the current note includes the criteria specified add that note to the filteredNotes array
    */
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note)
    }
};
// console.log(filteredNotes)

// console.log("****** Note Articles********");

// //Iterate the notes array

// for(const note of notes){
//     // on each iteration you console.log to display the text of each note but surrounded by an article HTML element
//     console.log(`<article>${note.text} </article>`);
// }

//need to include a child <section> element for each note 

//need a nested for loop

// for(const note of notes){
//     // on each iteration you console.log to display the text of each note but surrounded by an article HTML element
//     console.log(`<article>\n\t${note.text}`)
//     for(const topic of note.topics){
//         console.log(`\t<section>${topic}</section>`)
//     }
//     console.log("</article>")
// }


console.log("*** Notes Article ****")
//Start with a variable to store all of the content in

let notesArticle = ""
//Iterate through the Array of notes

for (const note of notes) {

    /* add the article tag to each note and add the text from the array inside the article tag
    add \n and \t tags for formatting purposes. This code iterates through each text and then passes off
     to another for loop to get the topics associated with the text to put into article tags below each note text. */

    notesArticle += (`\n<article>\n\t${note.text}`)
    //iterate through the topics array

    for (topic of note.topics) {

        // create an empty variable to hold the topic text and setion tag as you iterate through the array

        //add the section tag with the topics string in between the tags
        notesArticle += `\n\t<section>${topic}</section>`

        //add the variable holding the topics section to the notesArticle variable with a +=

    }
    //add the closing article tag to each note article section
    notesArticle += "\n</article>"
}

//print all of the notes with topics to the console

console.log(notesArticle)


















