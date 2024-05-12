import { User, NewUser } from "../types";

const users: User[] = []

export const addUser = ({name, email, country}: NewUser): User => {
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
      throw new Error('User with this email already exists');
  }

  const newUser = {
      id: users.length + 1, 
      name,
      email,
      country, 
  };

  users.push(newUser);
  return newUser
}

export const getAllUsers = () => users