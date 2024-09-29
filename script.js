function calculateResult() {
    // Get the student's name
    const studentName = prompt("Enter the student's name:");

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
    } if (percentage >= 80) {
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

    // Display the result
    const resultBox = document.getElementById("result-box");
    resultBox.innerHTML = `
        <p><strong>Name:</strong> ${studentName}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Remarks:</strong> ${remarks}</p>
    `;
}
