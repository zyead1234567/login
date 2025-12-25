import { Box, Typography } from "@mui/material";
import "tailwindcss";


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
      <Typography
        variant="h4"
        sx={{ fontWeight: 550, mt: 2, ml: 3, fontFamily: "'Nunito', sans-serif" }}
      >
        Sign in
      </Typography>


      <Typography variant="body2" sx={{ opacity: 0.9, mt: 1, ml: 3 }}>
        New user? <a href="#" className="text-blue-600 hover:text-blue-800 underline underline-offset-4">
          Create an account</a>
       
      </Typography >
      

    </  Box>
  );
}
