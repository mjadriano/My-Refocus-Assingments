/*
Student - array of object
    Every student object has these properties
    - Firstname
    - Lastname
    - Subjects - array of object
        Every Subject object has these properties
        - Subject Name
        - Grades - array of object
            Every grade object has these properties
                - Term
                - Grade

*/

var student = [
    {
        firstName: "Mj",
        lastName: "Adriano",
        subjects: [
            {
                subjectName: "Math",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 3
                    },
                    {
                        term: "2nd quarter",
                        grade: 2.6
                    }
                ]
            },
            {
                subjectName: "Science",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 2
                    },
                    {
                        term: "2nd quarter",
                        grade: 3
                    }
                ]
            }
            
        ]
    },
    {
        firstName: "Uno",
        lastName: "Adriano",
        subjects: [
            {
                subjectName: "Math",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 4.3
                    },
                    {
                        term: "2nd quarter",
                        grade: 5
                    }
                ]
            },
            {
                subjectName: "Science",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 3.2
                    },
                    {
                        term: "2nd quarter",
                        grade: 5
                    }
                ]
            }
        ]
    },
    {
        firstName: "atwodis",
        lastName: "adriano",
        subjects: [
            {
                subjectName: "Math",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 4
                    },
                    {
                        term: "2nd quarter",
                        grade: 2.5
                    }
                ]
            },
            {
                subjectName: "Science",
                grades: [
                    {
                        term: "1st quarter",
                        grade: 3
                    },
                    {
                        term: "2nd quarter",
                        grade: 3
                    }
                ]
            }
        ]
    }
];

var passedStudent = [];

// Loop the students ✅
// Get grades per subject and sum it (Sum the grades) ✅
// Overall Grades (Sum of all the subjects) ✅
// Get Average Grade ✅
// Condition and see who passed ✅
// Rank the students who passed ✅

student.forEach((element) => {
    let gradesPerSubject = element.subjects.map((obj) => {
       return obj.grades.reduce((prev, next) => prev.grade + next.grade);
    });

    let overallGrades = gradesPerSubject.reduce((prev, next) => prev + next);

    let averageGrade = overallGrades / (element.subjects.length * 2);
    
    console.log(element.firstName + " - " + averageGrade);

    if (averageGrade > 3){
        passedStudent.push({
            ...element,
            overallAverageGrade: averageGrade
        })
    }
});

let ranking = passedStudent.sort((prev, next) => prev.overallAverageGrade + next.overallAverageGrade);
console.log(ranking);