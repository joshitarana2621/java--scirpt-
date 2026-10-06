//when you open browser and then do inspect and do console in that code global scope  
//in coding enviroment[using node] global scope in both it is different

//var:->it has scope of whole code
//let:->it has bracket scope {}
//const :-> it has also bracket scope{}

// JavaScript Scope Practice

let college = "CHARUSAT";        // Global scope
const course = "Computer Engineering";

function studentDetails() {
    let studentName = "Tarana";  // Function scope
    var semester = 3;           // Function scope

    console.log("College:", college);
    console.log("Course:", course);
    console.log("Name:", studentName);
    console.log("Semester:", semester);

    if (semester === 3) {
        let subject = "JavaScript";   // Block scope
        const topic = "Scope";        // Block scope
        var language = "JS";          // Function scope

        console.log("Subject:", subject);
        console.log("Topic:", topic);
        console.log("Language:", language);

        function topicDetails() {
            let level = "Beginner";   // Inner function scope

            console.log("College:", college);
            console.log("Name:", studentName);
            console.log("Subject:", subject);
            console.log("Topic:", topic);
            console.log("Level:", level);
        }

        topicDetails();

        console.log("Inside block - language:", language);
    }

    console.log("Outside block - language:", language);

    // Try uncommenting these one by one:
    // console.log(subject);
    // console.log(topic);
    // console.log(level);
}

studentDetails();

console.log("Global college:", college);
console.log("Global course:", course);

// Try uncommenting:
// console.log(studentName);
// console.log(semester);
// console.log(language);