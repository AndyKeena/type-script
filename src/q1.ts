interface User {
    name: string;
    age: number;
    email: string;
  }
  
  function printUserInfo(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
  }
  
  const user1: User = {
    name: "Andrea Okeena",
    age: 22,
    email: "okeena.elders@gmail.com",
  };
  
  printUserInfo(user1);
