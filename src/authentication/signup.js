import React, { useState } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignInLeft from "./signinleft";
import { INSERT_USER_ACCOUNT } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";



const theme = createTheme();

export default function SignUp() {
  const [firstNameInput, setFirstName] = useState("");
  const [lastNameInput, setLastName] = useState("");
  const [phoneNumberInput, setPhoneNumber] = useState("");
  const [emailInput, setEmail] = useState();
  const [passwordInput, setPassword] = useState();
  const [usernameInput, setUserName] = useState();
  const [confirmPasswordInput, setConfirmPassword] = useState();

  const [add_user, { error }] = useMutation(INSERT_USER_ACCOUNT)

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstNameInput !== "" && lastNameInput !== "" && emailInput !== "" && usernameInput !== "" && passwordInput !== "" && (passwordInput === confirmPasswordInput)) {
      var x = add_user({
        variables: {
          first_name: firstNameInput,
          last_name: lastNameInput,
          phone_no: phoneNumberInput,
          user_name: usernameInput,
          email: emailInput,
          password: passwordInput
        }

      });
      if (x) {
        // console.log(x.data);

        window.localStorage.setItem("companyid", null);
        navigateToLogin();
      }
    }

  }



  return (
    <div className="grid grid-cols-2 gap-2 justify-items-center bg-gray-100 dark:bg-gray-700" >
      <SignInLeft />
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
              Sign Up
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}

            >
              <div>
                <Grid container spacing={2} columns={16}>
                  <Grid item lg={8}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="የመጀመሪያ ስም"
                      autoFocus
                      size="medium"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }
                      }
                    />
                  </Grid>
                  <Grid item lg={8}>
                    <TextField
                      autoComplete="given-name"
                      name="middleName"
                      required
                      fullWidth
                      id="middleName"
                      label="የአባት ስም"
                      autoFocus
                      size="medium"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }
                      }


                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} columns={16}>
                  <Grid item lg={8}>
                    <TextField
                      autoComplete="given-name"
                      name="phoneNumber"
                      required
                      fullWidth
                      type="number"
                      id="phoneNumber"
                      label="ስልክ ቁጥር"
                      autoFocus
                      size="medium"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }
                      }
                    />
                  </Grid>
                  <Grid item lg={8}>
                    <TextField
                      autoComplete="given-name"
                      name="age"
                      required
                      fullWidth
                      type="number"
                      id="age"
                      label="አድሜ"
                      autoFocus
                      size="medium"

                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} columns={16}>
                  <Grid item lg={8}>
                    <TextField
                      autoComplete="given-name"
                      name="email"
                      required
                      fullWidth
                      id="email"
                      type="text"
                      label="ኢሜይል"
                      autoFocus
                      size="medium"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }
                      }
                    />
                  </Grid>
                  <Grid item lg={8}>

                    <TextField
                      autoComplete="given-name"
                      name="username"
                      required
                      fullWidth
                      id="username"
                      type="text"
                      label="username"
                      autoFocus
                      size="medium"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }
                      }
                    />
                  </Grid>

                </Grid>

                <Grid container spacing={2} columns={16}>
                  <Grid item lg={8}>
                    <TextField
                      autoComplete="given-name"
                      name="password"
                      required
                      fullWidth
                      id="password"
                      label="የሚስጥር ቃል"
                      autoFocus
                      size="medium"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }
                      }
                    />
                  </Grid>
                  <Grid item lg={8}>
                    <TextField
                      autoComplete="given-name"
                      name="confirmpassword"
                      required
                      fullWidth
                      id="confirmpassword"
                      label="የሚስጥር ቃል ድገም"
                      autoFocus
                      size="medium"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />

                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                // onClick={handleSubmit}
                >
                  Sign Up
                </Button>

                <div>
                  <Link
                    onClick={navigateToLogin}
                    variant="body2" fontSize={17}>
                    {"Already have an account? Sign In"}
                  </Link>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );

}
