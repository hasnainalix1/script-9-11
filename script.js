let studentName = "";

function calculateResult() {
    if (!studentName) {
        studentName = prompt("Enter the student's name:");
    }

    const totalMarks = parseFloat(prompt("Enter the total marks:"));
    const obtainedMarks = parseFloat(prompt("Enter the obtained marks:"));

    if (isNaN(totalMarks) || isNaN(obtainedMarks)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (obtainedMarks > totalMarks) {
        alert("Obtained marks cannot be greater than total marks.");
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = "";
    let remarks = "";

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

    const resultBox = document.getElementById("result-box");
    resultBox.innerHTML = `
        <p><strong>Name:</strong> ${studentName}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Remarks:</strong> ${remarks}</p>
    `;

    document.getElementById("change-name-btn").style.display = "inline-block";
}

function changeName() {
    studentName = prompt("Enter the new name:");
    const resultBox = document.getElementById("result-box");
    if (resultBox.innerHTML !== "") {
        resultBox.querySelector('p').innerHTML = `<strong>Name:</strong> ${studentName}`;
    }
}
