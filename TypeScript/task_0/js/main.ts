interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
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

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);


    document.body.appendChild(table);
}

renderTable(studentsList);
