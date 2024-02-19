import wretch from "wretch";

export const auth = () => {
  const api = wretch("url", { mode: "cors" })
    .errorType("json")
    .resolve((r) => r.json());

  const login = async () => {
    try {
      const res = wretch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`
      ).get();

      console.log(res);
    } catch (error) {
      console.error("an error occurred during login", error);
    }
  };

  const register = async () => {
    try {
      const res = wretch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/register`
      ).get();

      console.log(res);
    } catch (error) {
      console.error("an error occurred during login", error);
    }
  };
};
