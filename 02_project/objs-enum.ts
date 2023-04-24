enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: "ono5",
  age: 34,
  hobbies: ["Programming", "Movies"],
  role: Role.ADMIN,
};

if (person2.role == Role.ADMIN) {
  console.log("ADMIN USER");
}
