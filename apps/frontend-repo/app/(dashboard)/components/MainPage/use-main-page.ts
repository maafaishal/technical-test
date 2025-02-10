import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 6 characters long." }),
});

export const useMainPage = () => {
  const {
    register,
    handleSubmit: handleSubmitUseForm,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [isEdit, setEdit] = useState(false);

  const handleSubmit = handleSubmitUseForm((data) => console.log(data));

  return {
    isEdit,
    setEdit,
    errors,
    register,
    handleSubmit,
  };
};
