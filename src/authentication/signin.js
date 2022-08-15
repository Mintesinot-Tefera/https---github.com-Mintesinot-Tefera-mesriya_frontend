import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignInLeft from "./signinleft";
import SignInRight from "./signinright";

const theme = createTheme();

export default function SignIn() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-100 justify-items-center dark:bg-gray-700">
      <SignInLeft />
      {/* <SignInCard /> */}
      <SignInRight />
    </div>
  );

}
