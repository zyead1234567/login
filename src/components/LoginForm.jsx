
//import { loginSchema } from "../auth/loginSchema";
import { loginRequest } from "../features/authApi";
import React, { useState } from "react";
import { Formik } from "formik";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";

import {
  Box,
  TextField,
  Button,
  Alert,
  InputAdornment,
  IconButton,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

//import LoginLinks from "./LoginLinks";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const [serverError, setServerError] = useState("");

  return (
    <>
      {serverError ? (
        <Alert className="loginAlert" severity="error" sx={{ mb: 2 }}>
          {serverError}
        </Alert>
      ) : null}

      <Formik 
        initialValues={{ email: "", }}
        //validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setServerError("");
          try {
            const res = await loginRequest(values);
            localStorage.setItem("token", res.token);
            alert("تم تسجيل الدخول بنجاح ✅");
          } catch (e) {
            setServerError(e?.message || "حدث خطأ، حاول مرة أخرى");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
          isSubmitting,
        }) => (
          <Box sx={{ p: 0, minHeight: 420 }} className="loginForm" component="form" onSubmit={handleSubmit} noValidate>

            <Typography sx={{ mt: -4, mb: 10, ml: 0, fontSize: 12, color: "#374151" }}>
              Email address
            </Typography>

            <TextField

              fullWidth
              margin="normal"
              label=""
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email ? errors.email : " "}
              sx={{
                width: 420,
                "& .MuiOutlinedInput-root": {
                  height: 33,
                  borderRadius: 1,
                  overflow: "hidden",
                  transform: "translateY(-50px)",
                  mt: -5




                },
                "& .MuiOutlinedInput-input": {
                  padding: "20px 16px",
                },
              }}

            />








            <Button
              type="submit"

              variant="contained"
              disabled={isSubmitting}
              sx={{ borderRadius: 8, height: 30, fontSize: 12, width: 85, mt: -12, ml: 41 }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  جاري تسجيل البريددخول...
                </>
              ) : (
                "Continue "
              )}
            </Button>

            <Divider sx={{ my: 2.5, fontSize: 14, mt: -2 }}>Or</Divider>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "grey.300",
                color: "grey.700",
                "&:hover": {
                  borderColor: "grey.500",
                  borderWidth: 1,
                  backgroundColor: "transparent",
                  
                },
              }}
              onClick={() => alert("")}
            >
              <FaApple className="text-[#1877F2] text-xl mr-3"/>
              Continue with Google
            </Button>

            <Button
              fullWidth
              size="large"
              variant="outlined"
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: 6,         
                borderWidth: 1,
                borderColor: "grey.300",  
                color: "grey.700",
                "&:hover": {
                  borderColor: "grey.500", 
                  borderWidth: 1,         
                  backgroundColor: "transparent", 
                },
              }}
              onClick={() => alert("")}
            >
               <FaFacebookF />
              Continue with Facebook
              
            </Button>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: 6,         
                borderWidth: 1,
                borderColor: "grey.300", 
                color: "grey.700",
                "&:hover": {
                  borderColor: "grey.500", 
                  borderWidth: 1,          
                  backgroundColor: "transparent", 
                },
              }}
              onClick={() => alert("")}
            >
              <FaGoogle />
              Continue with Apple
            </Button>

            <Typography
              component="a"
              href="#"
              variant="caption"
              sx={{
                display: "block",
                mt: 3,
                ml: 0,
                color: "#2563eb",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                "&:hover": { color: "#1d4ed8" },
                fontSize: 14, fontWeight: 540
              }}
            >
              Get help signing in
            </Typography>


          </Box>
        )}
      </Formik>
    </>
  );
}
