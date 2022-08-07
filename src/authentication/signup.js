import * as React from "react";
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
import SignInRight from "../components/signinright";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div class="grid grid-cols-2 gap-4 justify-items-center dark:bg-gray-700" >
      <SignInRight />
      {/* <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300">
         
        01</div> */}
      <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300 ">
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
          >
            <div></div>
            <div>
              <Grid container spacing={2} columns={16}>
                <Grid item lg={8}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    size="small"
                  />
                </Grid>
                <Grid item lg={8}>
                  <TextField
                    autoComplete="given-name"
                    name="middleName"
                    required
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    autoFocus
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} columns={16}>
                <Grid item lg={8}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    size="small"
                  />
                </Grid>
                <Grid item lg={8}>
                  <TextField
                    autoComplete="given-name"
                    name="middleName"
                    required
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    autoFocus
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item xs={8} sm={4} justifyContent="flex-start" >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  size="small"
                />
              </Grid>
              <Grid container spacing={2} columns={16}>
                <Grid item lg={8}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    size="small"
                  />
                </Grid>
                <Grid item lg={8}>
                  <TextField
                    autoComplete="given-name"
                    name="middleName"
                    required
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    autoFocus
                    size="small"
                  />
                </Grid>
              </Grid>
              
              <Button
                 type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </div>
          </Box>
          {/* <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
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
              size="small"
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
              size="small"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box> */}
        </Box>
      </div>
    </div>
  );
  // <ThemeProvider theme={theme}>
  //   <Grid container component="main" sx={{ height: "100vh" }}>
  //     <CssBaseline />
  //     <Grid
  //       item
  //       xs={false}
  //       sm={4}
  //       md={7}
  //       sx={{
  //         backgroundImage: "url(https://source.unsplash.com/random)",
  //         backgroundRepeat: "no-repeat",
  //         backgroundColor: (t) =>
  //           t.palette.mode === "light"
  //             ? t.palette.grey[50]
  //             : t.palette.grey[900],
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //       }}
  //     />
  //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  //       <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
  //         <Box
  //           sx={{
  //             my: 8,
  //             mx: 4,
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "center",
  //             justifyContent: "center"
  //           }}
  //         >
  //           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
  //             <LockOutlinedIcon />
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //             Sign in
  //           </Typography>
  //           <Box
  //             component="form"
  //             noValidate
  //             onSubmit={handleSubmit}
  //             sx={{ mt: 1 }}
  //           >
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="email"
  //               label="Email Address"
  //               name="email"
  //               autoComplete="email"
  //               autoFocus
  //             />
  //             <TextField
  //               margin="normal"
  //               required
  //               fullWidth
  //               name="password"
  //               label="Password"
  //               type="password"
  //               id="password"
  //               autoComplete="current-password"
  //             />
  //             <FormControlLabel
  //               control={<Checkbox value="remember" color="primary" />}
  //               label="Remember me"
  //             />
  //             <Button
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               sx={{ mt: 3, mb: 2 }}
  //             >
  //               Sign In
  //             </Button>
  //             <Grid container>
  //               <Grid item xs>
  //                 <Link href="#" variant="body2">
  //                   Forgot password?
  //                 </Link>
  //               </Grid>
  //               <Grid item>
  //                 <Link href="#" variant="body2">
  //                   {"Don't have an account? Sign Up"}
  //                 </Link>
  //               </Grid>
  //             </Grid>
  //           </Box>
  //         </Box>
  //       </div>
  //     </Grid>
  //   </Grid>
  // </ThemeProvider>
  // );
}
