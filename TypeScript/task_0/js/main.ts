// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student variables
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Paris'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Lyon'
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
    // Create table element
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    students.forEach((student) => {
        const row = document.createElement('tr');

        // Create cell for firstName
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        // Create cell for location
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        // Append cells to row
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        // Append row to the table body
        tableBody.appendChild(row);
    });

    // Append the table body to the table
    table.appendChild(tableBody);

    // Append the table to the document body or a specific container
    document.body.appendChild(table);
}

// Render the table with the studentsList
renderTable(studentsList);
