
// 1. get the value of the first element in an array that has value greater than 20

const arr_1 = [1, 2, 3, 4, 5, 20, 25, 30];

const result_1 = arr.filter(x => x > 20).shift();

console.log(result_1); // Output: 25

// 2. get the value of the first element in an array that has value less than 20

const arr = [1, 2, 3, 4, 5, 20, 19, 18];

const result = arr.filter(x => x < 20).shift();

console.log(result); // Output: 1

// 3. filter data based on a id(property) in an array of objects: pick any random id

const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 5, name: 'Alice' },
    { id: 6, name: 'Mike' },
    { id: 5, name: 'Emma' }
  ];
  
  const filteredData = data.filter(item => item.id === 5);
  
  console.log(filteredData);
  // Output:
  // [
  //   { id: 5, name: 'Alice' },
  //   { id: 5, name: 'Emma' }
  // ]


//   check element is odd or even in an array [90, 89, 56, 45]

const arr_2 = [90, 89, 56, 45];

const result_2 = arr.map(element => element % 2 === 0 ? 'even' : 'odd');

console.log(result_2);
// Output: [ "even", "odd", "even", "odd" ]

//5. 6. create a class Animal: walk(), eat(), climb(), gender, name, disease

class Animal {
    constructor(name, gender, disease) {
      this.name = name;
      this.gender = gender;
      this.disease = disease;
    }
  
    walk() {
      console.log(`${this.name} is walking`);
    }
  
    eat() {
      console.log(`${this.name} is eating`);
    }
  
    climb() {
      console.log(`${this.name} is climbing`);
    }
  
    toString() {
      return `Name: ${this.name}, Gender: ${this.gender}, Disease: ${this.disease}`;
    }
  }
  
  // Example usage:
  const dog = new Animal("Fido", "Male", "None");
  console.log(dog.toString()); // Output: Name: Fido, Gender: Male, Disease: None
  
  dog.walk(); // Output: Fido is walking
  dog.eat(); // Output: Fido is eating
  dog.climb(); // Output: Fido is climbing

//   create a class Book: type_of_book(), no. of pages, type of pages, author

class Book {
    constructor(type_of_book, no_of_pages, type_of_pages, author) {
      this.type_of_book = type_of_book;
      this.no_of_pages = no_of_pages;
      this.type_of_pages = type_of_pages;
      this.author = author;
    }
  
    toString() {
      return `Type of Book: ${this.type_of_book}, Number of Pages: ${this.no_of_pages}, Type of Pages: ${this.type_of_pages}, Author: ${this.author}`;
    }
  }
  
  // Example usage:
  const book = new Book("Fiction", 250, "Paperback", "John Smith");
  console.log(book.toString()); // Output: Type of Book: Fiction, Number of Pages: 250, Type of Pages: Paperback, Author: John Smith