export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  favoriteColor: string;
  createdAt: string;
}

export interface CreateUserData {
  name: string;
  email: string;
  cpf: string;
  favoriteColor: string;
}
