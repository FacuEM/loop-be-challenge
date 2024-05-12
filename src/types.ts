export interface User {
  id: number
  name: string
  email: string
  country: string
}


export type NewUser = Omit<User, "id">