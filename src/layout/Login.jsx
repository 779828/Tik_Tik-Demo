import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledPaper } from "../styles/loginStyles.js";
import logo from "../assets/logoWhite.png";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log("Login Data:", values);
    setTimeout(() => {
      localStorage.setItem("token", "dummy-auth-token");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <StyledContainer maxWidth="xs">
      <StyledPaper
        elevation={3}
        sx={{
          borderRadius: "12px",
          padding: "2rem",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          <img src={logo} alt="logo" width={100} />
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form>
              <Typography variant="h6" align="left">
                Email
              </Typography>
              <Field
                as={TextField}
                fullWidth
                // label="Email"
                variant="outlined"
                margin="normal"
                name="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <Typography variant="h6" align="left" sx={{ mt: 1 }}>
                Password
              </Typography>
              <Field
                as={TextField}
                fullWidth
                // label="Password"
                variant="outlined"
                margin="normal"
                name="password"
                type={showPassword ? "text" : "password"}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Login;
