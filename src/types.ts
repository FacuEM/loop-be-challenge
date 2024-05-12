export interface User {
  id: string;
  name: string;
  email: string;
  country: string;
}

export type NewUser = Omit<User, "id">;
