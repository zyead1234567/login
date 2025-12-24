import { Box, Typography } from "@mui/material";

export default function LoginHeader() {
  return (
    <Box
      sx={{
        p: 3,
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
        color: "black",
      }}
    >
      <  Typography variant="h3" fontWeight={70} className="header1">
        Sign in
      </Typography >
      <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5,  }}>
        New user? Create an account
      </Typography>
    </  Box>
  );
}
