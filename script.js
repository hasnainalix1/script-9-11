let students = [];

function calculateResult() {
    // Get the student's name
    const studentName = prompt("Enter the student's name:");

    // Check if the student's name already exists
    const existingStudent = students.find(student => student.name.toLowerCase() === studentName.toLowerCase());

    if (existingStudent) {
        // If the student exists, display their data
        displayResult(existingStudent);
        return;
    }

    // Get total marks and obtained marks from the user
    const totalMarks = parseFloat(prompt("Enter the total marks:"));
    const obtainedMarks = parseFloat(prompt("Enter the obtained marks:"));

    // Validate inputs
    if (isNaN(totalMarks) || isNaN(obtainedMarks)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (obtainedMarks > totalMarks) {
        alert("Obtained marks cannot be greater than total marks.");
        return;
    }

    // Calculate percentage
    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = "";
    let remarks = "";

    // Determine the grade and remarks based on the percentage
    if (percentage >= 90) {
        grade = "A+";
        remarks = "Excellent work!";
    } else if (percentage >= 80) {
        grade = "A";
        remarks = "Great job!";
    } else if (percentage >= 70) {
        grade = "B+";
        remarks = "Good effort!";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "Keep improving!";
    } else if (percentage >= 50) {
        grade = "C";
        remarks = "You passed, but there's room for improvement.";
    } else if (percentage >= 40) {
        grade = "D";
        remarks = "Just passed. Try harder next time.";
    } else {
        grade = "F";
        remarks = "Failed. Need significant improvement.";
    }

    // Create the student object and store it
    const student = {
        name: studentName,
        totalMarks,
        obtainedMarks,
        percentage,
        grade,
        remarks
    };

    students.push(student);
    
    // Display the result
    displayResult(student);
}

function displayResult(student) {
    const resultBox = document.getElementById("result-box");
    resultBox.innerHTML = `
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Total Marks:</strong> ${student.totalMarks}</p>
        <p><strong>Obtained Marks:</strong> ${student.obtainedMarks}</p>
        <p><strong>Percentage:</strong> ${student.percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${student.grade}</p>
        <p><strong>Remarks:</strong> ${student.remarks}</p>
    `;
}

function getStudentResult() {
    const studentName = prompt("Enter the student's name to view their result:");
    const student = students.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    if (student) {
        displayResult(student);
    } else {
        alert("Student not found!");
    }
}
