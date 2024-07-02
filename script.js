let users = {};

 for (let i = 0; i < 10; i++) {

  let name = prompt(" Ismingizni kiriting ")
  let age = +prompt(" Yoshingizni kiriting ") 
  users[i+1] = { ismi: name , yoshi: age };

  console.log(`User ${i+1} `);
  console.log(`User name: ${users[i+1].ismi}`);
  console.log(`User age: ${users[i+1].yoshi}`);
} 