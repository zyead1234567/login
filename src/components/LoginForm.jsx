
import { loginSchema } from "../auth/loginSchema";
import { loginRequest } from "../features/authApi";
import React, { useState } from "react";
import { Formik } from "formik";


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

import LoginLinks from "./LoginLinks";

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
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
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
          <Box className="loginForm" component="form" onSubmit={handleSubmit} noValidate>
            <TextField className="vvv"
              fullWidth
              margin="normal"
              label="البريد "
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email ? errors.email : " "}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="كلمة المرور"
              name="password"
              type={showPass ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password ? errors.password : " "}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPass((s) => !s)}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPass ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoginLinks />

            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              disabled={isSubmitting}
              sx={{ py: 1.2, borderRadius: 2 }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  جاري تسجيل الدخول...
                </>
              ) : (
                "تسجيل "
              )}
            </Button>

            <Divider sx={{ my: 2.5 }}>أو</Divider>

            <Button
              fullWidth
              size="large"
              variant="outlined"
              sx={{ py: 1.2, borderRadius: 2 }}
              onClick={() => alert("")}
            >
              تسجيل الدخول بـ Google
            </Button>

            <Typography
              variant="caption"
              sx={{ display: "block", mt: 2, color: "text.secondary" }}
            >
              بتسجيل الدخول أنت توافق على الشروط وسياسة الخصوصية.
            </Typography>
          </Box>
        )}
      </Formik>
    </>
  );
}
