import { useState } from "react";
import { toast } from "react-toastify";
import { type CreateUserData } from "../../@types/users";
import { createUser } from "../../services/users";

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (body: CreateUserData) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfNumbers = body.cpf.replace(/\D/g, "");

    const hasEmptyFields = [
      body.name,
      body.email,
      body.cpf,
      body.favoriteColor,
    ].some((value) => !value?.trim());

    const isValidEmail = emailRegex.test(body.email);
    const isValidCpf = cpfNumbers.length === 11;

    if (hasEmptyFields) {
      toast.error("There are unfilled fields.");
      return;
    }

    if (!isValidEmail) {
      toast.error("Enter a valid email address.");
      return;
    }

    if (!isValidCpf) {
      toast.error("Enter a valid CPF.");
      return;
    }

    try {
      setLoading(true);

      await createUser({
        ...body,
        cpf: cpfNumbers,
      });

      toast.success("User successfully registered.");
    } catch (error) {
      console.error(error);
      toast.error("Unexpected error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    onSubmit,
    loading,
  };
};
