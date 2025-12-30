export function isUserAdult(user) {
  if (!user || user.age == null || isNaN(user.age)) {
    throw new Error("Invalid user");
  }
  return user.age >= 18;
}
