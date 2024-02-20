import type { UserType } from "@/types/user";

export const auth = () => {
  const END_POINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const BASE_URL = {
    loginUser: END_POINT + "/auth/login",
    registerUser: END_POINT + "/auth/register",
  };

  const login = async (data: UserType) => {
    let outcome;

    try {
      let res = await fetch(BASE_URL.loginUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data),
      });

      outcome = res;
    } catch (error) {
      console.error("an error occurred during login", error);

      outcome = error;
    }

    return outcome;
  };

  const register = async (data: UserType) => {
    let outcome;

    try {
      let res = await fetch(BASE_URL.registerUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data),
      });

      outcome = res;
    } catch (error) {
      console.error("an error occurred during login", error);

      outcome = error;
    }

    return outcome;
  };

  return {
    login,
    register,
  };
};
