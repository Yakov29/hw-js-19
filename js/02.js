const people = [
    { name: 'John', surname: 'Doe', age: 32, occupation: 'programmer' },
    { name: 'Jane', surname: 'Lee', age: 26, occupation: 'teacher' },
    { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
    { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
  ];
  
  function createFullNameObject(arr) {
    return arr.map(person => ({
      id: person.id,
      fullName: `${person.name} ${person.surname}`
    }));
  }
  
  const peopleWithFullName = createFullNameObject(people);
  console.log(peopleWithFullName);
