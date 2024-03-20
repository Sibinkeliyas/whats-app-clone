import { useDispatch, useSelector } from "@/store";
import { updateUserData } from "@/store/slice/userProfile";
import { JWtContextProps, JwtProps } from "@/types/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect } from "react";

const initialState: JwtProps = {
  isLoggedIn: false,
  user: null,
};

const JWTContext = createContext<JWtContextProps | null>(null);

const setSession = async (key: string, value: string | null) => {
  if (key && value) {
    await AsyncStorage.setItem(key, value);
  } else {
    await AsyncStorage.removeItem(key);
  }
};

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.userReducer);
  useEffect(() => {
    const init = async () => {
      const session = await AsyncStorage.getItem("access_token");
      if (session) {
        dispatch(updateUserData(JSON.parse(session)));
      } else {
        await setSession("theme", "light");
      }
    };
    init();
  }, []);
  const userLogin = async (email: string, password: string) => {
    await setSession("access_token", JSON.stringify({ email, password }));
    dispatch(updateUserData({ email, password , isLoggedIn : true}));
    return true;
  };
  return (
    <JWTContext.Provider value={{ user, userLogin, isLoggedIn }}>
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
