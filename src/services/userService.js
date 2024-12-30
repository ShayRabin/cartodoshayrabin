const users = [{ _id: "1", name: "Shay Rabin", email: "shay@example.com" }];

export const userService = {
  getUser,
};

function getUser() {
  return Promise.resolve(users[0]); // תמיד מחזיר את המשתמש הראשון (לדוגמה)
}
