//  Q1. Create an object called person with name = John, age = 50.Then, access the object to alert("John is 50").

const person = {
  name: "John",
  age: 50
};

alert(person.name + " is " + person.age);

// we have a object:
person={
    name: "Jame",
    age: 19,
    address: "London",

}

// Q2.  add at least one property of the person object.
person={
  name: "Jame",
  age: 19,
  address: "London",
  sex: "male"
};
// Q3. Please update value of address into "English"
person={
  name: "Jame",
  age: 19,
  address: "London",
  sex: "male"
};
person.address='English'
console.log(person)

// Q4. remove at least one property of the person object.
delete person.age
console.log(person.age)
// q5 Let's create an object containing the function inside and then call the function via object

//  we have a object:
const  teacher = {
    firstName : "Nam",
    lastName: "Nguyen",
    subject: ['Math', 'English','Music']
}
// Q6 Use a for of loop and console the value of the subject attribute to the screen.
//  we have a:
 const arrays = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 22,
      },
      {
        id: 2,
        name: "Nguyễn Lan Anh",
        age: 21,
      },
      {
        id: 3,
        name: "Hồ Văn Trí",
        age: 23,
      },
      {
        id: 4,
        name: "Cao Văn La",
        age: 24,
      },
    ];
    
    // Combine the attributes learned in the previous lesson .
    // Q 7: Add a new user to the beginning of the array (using unshift())
    arrays.unshift({id: 5, name: Marris, age: 22});
    console.log(arrays);
  
   
    // Q8: Add a new user at the end of the array (using push())
    arrays.push({id: 6, name: Alexender, age: 30})
    console.log(arrays);
    // Q9: add multiple users to the array  (using push())
    
    
    // Q10: remove 1 user from the array (using(pop))
    arrays.pop();
    console.log(arrays);
    
    // Q11: filter out users with age >= 22;( using(filter())
    var selected_number = numbers.filter(function(value){
      if (value >= 22){
      }}
    // extend part:
    // Q12: use for loop to get users with age >= 23
    
    // Q13: write an object using setter & getter to add new value and get value. key word (Getter, setter)

  

