import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { LOGIN_USER } from "../GraphQL/Queries";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";



function SignInRight() {
  const navigate = useNavigate();

  // const navigateUserhome = (id) => {
  //   navigate(`/userhome/${id}`)
  // };

  const navigateUserhome = () => {
    navigate(`/userhome`)
  };

  const [emailInput, setEmail] = useState();
  const [passwordInput, setPassword] = useState();

  const [loginuser, { error, loading, data }] = useLazyQuery(LOGIN_USER, {
    variables: { email: emailInput, password: passwordInput }
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    loginuser();
    if (data) {
      // console.log(data.user_account[0].user_name);
      // console.log(data.user_account[0].company_pages[0].id);

      // navigateUserhome(data.user_account[0].id);
      window.localStorage.setItem("userid", data.user_account[0].id);
      window.localStorage.setItem("companyid", data.user_account[0].company_pages[0].id);
      navigateUserhome();

    }

    // useEffect(() => {
    //   if (data) {
    //     console.log(data.user_account[0].user_name);

    //   }
    // }, [data]);
    // );

  }


  return (
    <div className="m-20">
      <div className="max-w-xl bg-gray-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300">
        <Box
          sx={{
            my: 6,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            // onSubmit={handleSubmit}
            noValidate

          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size="medium"
              onChange={(e) => {
                setEmail(e.target.value);
              }
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="medium"
              onChange={(e) => {
                setPassword(e.target.value);
              }
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" size="medium" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <div>
              <Link href="#" variant="body2" fontSize={17}>
                Forgot password?
              </Link>
            </div>
            <div>
              <Link
                to="/register"
                variant="body2" fontSize={17}>
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default SignInRight;
