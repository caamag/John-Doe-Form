import { api } from "./";
import { type User, type CreateUserData } from "../@types/users";

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

export const createUser = async (data: CreateUserData): Promise<User> => {
  const response = await api.post<User>("/users", data);
  return response.data;
};
