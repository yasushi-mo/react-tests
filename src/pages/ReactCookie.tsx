import { FC } from "react";
import { useCookies } from "react-cookie";

export const ReactCookie: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const handleSetCookie = () => {
    setCookie("user", "John Doe", { path: "/", maxAge: 3600 }); // expires in 1 hour
  };

  const handleRemoveCookie = () => {
    removeCookie("user", { path: "/" });
  };

  return (
    <div>
      <h1>React Cookie</h1>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>

      <p>
        Current Cookie Value: {cookies.user ? cookies.user : "No cookie set"}
      </p>
    </div>
  );
};
