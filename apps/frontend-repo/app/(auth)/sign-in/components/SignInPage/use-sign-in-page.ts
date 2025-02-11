import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/store/store";

import { signInWithPopup, signInWithEmailAndPassword } from "@/store/actions";

import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 6 characters long." }),
});

export const useSignInPage = () => {
  const dispatch = useAppDispatch();
  const processLoading = useAppSelector((state) => state.auth.processLoading);

  const {
    register,
    handleSubmit: handleSubmitUseForm,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSignInWithPopup = async () => {
    dispatch(signInWithPopup());
  };

  const handleSubmit = handleSubmitUseForm(async (data) => {
    dispatch(
      signInWithEmailAndPassword({ email: data.email, password: data.password })
    );
  });

  return {
    processLoading,
    errors,
    register,
    handleSubmit,
    handleSignInWithPopup,
  };
};
