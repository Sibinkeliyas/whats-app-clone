import JWTContext from "@/context/JWTContext";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(JWTContext);
  if (!context) {
    throw new Error("JWT Provider must be wrapped");
  }
  return context;
};
export default useAuth;
