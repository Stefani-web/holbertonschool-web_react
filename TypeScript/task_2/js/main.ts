interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any; // Allows additional properties
  }

  interface Directors extends Teacher {
	numberOfReports: number;
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
  }

  class Director implements Directors {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	location: string;
	numberOfReports: number;

	constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	  this.fullTimeEmployee = fullTimeEmployee;
	  this.location = location;
	  this.numberOfReports = numberOfReports;
	}

	workFromHome(): string {
	  return 'Working from home';
	}

	getCoffeeBreak(): string {
	  return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
	  return 'Getting to director tasks';
	}
  }

  const director1: Directors = new Director('John', 'Doe', true, 'London', 17);

  console.log(director1);
  console.log(director1.workFromHome());
  console.log(director1.getCoffeeBreak());
  console.log(director1.workDirectorTasks());
