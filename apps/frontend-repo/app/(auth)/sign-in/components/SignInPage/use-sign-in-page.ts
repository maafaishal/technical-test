import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/store/store";

import { signInWithEmailAndPassword } from "@/store/actions";

import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
});

export const useSignInPage = () => {
  const dispatch = useAppDispatch();
  const processLoading = useAppSelector((state) => state.auth.processLoading);
  const errorMessage = useAppSelector((state) => state.auth.error);

  const {
    register,
    handleSubmit: handleSubmitUseForm,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmit = handleSubmitUseForm(async (data) => {
    dispatch(
      signInWithEmailAndPassword({ email: data.email, password: data.password })
    );
  });

  return {
    processLoading,
    errors,
    errorMessage,
    register,
    handleSubmit,
  };
};
