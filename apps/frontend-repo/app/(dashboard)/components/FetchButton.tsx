import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "@/store/store";

import { fetchUserData } from "@/store/actions";

export const FetchButton = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.user.loading);

  const handleClick = () => {
    dispatch(fetchUserData());
  };

  return (
    <Button
      variant="contained"
      loading={loading}
      disabled={loading}
      onClick={handleClick}
    >
      Fetch data
    </Button>
  );
};
