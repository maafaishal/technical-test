import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

import type { User } from "@ebuddy/shared";

import { useAppSelector, useAppDispatch } from "@/store/store";
import { fetchUserData, updateUserData } from "@/store/actions";

type FormData = {
  userId: User["id"];
  totalAverageWeightRatings: User["totalAverageWeightRatings"];
  numberOfRents: User["numberOfRents"];
  recentlyActive: Dayjs;
};

export const useMainPage = () => {
  const [isEdit, setEdit] = useState(false);
  const [recentlyActive, setRecentlyActive] = useState<Dayjs | null>(null);

  const {
    register,
    handleSubmit: handleSubmitUseForm,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.user.data);
  const userLoading = useAppSelector((state) => state.user.loading);

  const handleClickFetch = () => {
    dispatch(fetchUserData());
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setValue("recentlyActive", value);
    }
  };

  const handleSubmit = handleSubmitUseForm((data) => {
    dispatch(
      updateUserData({
        ...data,
        id: data.userId,
        recentlyActive: dayjs(data.recentlyActive).unix(),
      })
    );
  });

  useEffect(() => {
    if (userData) {
      setValue("userId", userData.id);
      setValue("totalAverageWeightRatings", userData.totalAverageWeightRatings);
      setValue("numberOfRents", userData.numberOfRents);
      setValue("recentlyActive", dayjs.unix(userData.recentlyActive));
      setRecentlyActive(dayjs.unix(userData.recentlyActive));
    }
  }, [setValue, userData]);

  return {
    isEdit,
    setEdit,
    userData,
    userLoading,
    errors,
    register,
    recentlyActive,
    handleSubmit,
    handleChangeDate,
    handleClickFetch,
  };
};
