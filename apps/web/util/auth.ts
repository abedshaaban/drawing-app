import type { UserType } from "@/types/user";

type ResponseType = {
  status: boolean;
  message: string;
  data: object | null;
  error: string | null;
};

export const auth = () => {
  /**
   * Base url for the backend server
   */
  const END_POINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

  /**
   * Endpoints to call
   */
  const BASE_URL = {
    loginUser: END_POINT + "/auth/login",
    registerUser: END_POINT + "/auth/register",
  };

  /**
   * Login user
   *
   * @param username  string
   * @param password  string
   * @returns
   * ```
   * {
   *   status: boolean
   *   message: string
   *   data: object | null
   *   error: string | null
   * }
   * ```
   *
   * @example Calling the function to login a user.
   * ```tsx
   * import { auth } from "@/util"
   *
   * const { status, data, error, message } = await auth().login(credentials)
   * ```
   */
  const login = async (data: UserType): Promise<ResponseType> => {
    let outcome: ResponseType;

    try {
      let res = await fetch(BASE_URL.loginUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data),
      });

      outcome = {
        status: true,
        message: "User logged successfully!",
        data: await res.json(),
        error: null,
      };
    } catch (error) {
      outcome = {
        status: false,
        message: "Error occurred while logging user",
        data: null,
        error:
          error && error instanceof Error ? error.message : "Blame someone",
      };
    }

    return outcome;
  };

  /**
   * Register user
   *
   * @param username  string
   * @param password  string
   * @returns
   * ```
   * {
   *   status: boolean
   *   message: string
   *   data: object | null
   *   error: string | null
   * }
   * ```
   *
   * @example Calling the function to register a user.
   * ```tsx
   * import { auth } from "@/util"
   *
   * const { status, data, error, message } = await auth().register(credentials)
   * ```
   */
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

      outcome = {
        status: true,
        message: "User registered successfully!",
        data: await res.json(),
        error: null,
      };
    } catch (error) {
      outcome = {
        status: false,
        message: "Error occurred while registering user.",
        data: null,
        error:
          error && error instanceof Error ? error.message : "Blame someone",
      };
    }

    return outcome;
  };

  return {
    login,
    register,
  };
};
