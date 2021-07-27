enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};


if (person.role === Role.ADMIN) {
  console.log('es admin 😎');
}