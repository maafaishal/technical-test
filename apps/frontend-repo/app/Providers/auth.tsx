import { useAppDispatch } from "@/store/store";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/config/firebaseConfig";

import { setAuthenticated, setNotAuthenticated } from "@/store/actions";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = await user.getIdToken();

      dispatch(setAuthenticated({ userId: user.uid, token }));
    } else {
      dispatch(setNotAuthenticated());
    }
  });

  return children;
};
