interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
  }

  const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };

  console.log(teacher3);

  // Directors interface that extends Teacher
  interface Directors extends Teacher {
	numberOfReports: number;
  }

  // Creating an object for Director
  const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17, // Additional property specific to Directors
  };

  // Logging the director1 object
  console.log(director1);
