import { User } from "@supabase/supabase-js";
import createSupabaseClient from "../supabase/supabaseClient";
import { createContext, useEffect, useReducer, useState } from "react";

interface useAuthProps {}

interface userAuthLoadingState {
  isLoggedIn: boolean;
  status: "loading";
  error: any;
  userResponseObject: null;
}

interface userAuthErrorState {
  isLoggedIn: boolean;

  status: "error";
  error: any;
  userResponseObject: null;
}

interface userAuthSuccessState {
  isLoggedIn: boolean;
  status: "success";
  error: null;
  userResponseObject: User | null;
}

type useAuthState =
  | userAuthLoadingState
  | userAuthErrorState
  | userAuthSuccessState;

type useAuthReturn = {
  user: useAuthState;
  signOut: () => void;
};

const useAuth = (): useAuthReturn => {
  const initialState: useAuthState = {
    isLoggedIn: false,

    status: "loading",
    error: {},
    userResponseObject: null,
  };

  const [userState, setUserState] = useState<useAuthState>(initialState);

  const supabase = createSupabaseClient();

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    supabase.auth.getUser().then((r) => {
      const userData = r.data.user;
      if (userData) {
        setUserState({
          isLoggedIn: true,
          userResponseObject: userData,
          status: "success",
          error: null,
        });
      } else {
        setUserState({
          isLoggedIn: false,
          status: "success",
          error: null,
          userResponseObject: null,
        });
      }
    });
  }, []);

  return { user: userState, signOut };
};

const AuthContext = createContext<useAuthReturn | null>(null);
export const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default useAuth;
