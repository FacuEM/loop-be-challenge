import { randomUUID } from "node:crypto";
import { User, NewUser } from "../types";

const users: User[] = [];

export class UserModel {
  static create({ name, email, country }: NewUser): User {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const newUser = {
      id: randomUUID(),
      name,
      email,
      country,
    };

    users.push(newUser);
    return newUser;
  }

  static getAll() {
    return users;
  }
}
