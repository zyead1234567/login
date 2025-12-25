import { Box, Paper } from "@mui/material";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import image from '../assets/Fotolia_187945154_XL.jpg'
export default function LoginPage() {
  return (
    <Box
      sx={{
       minHeight: "100vh",
    display: "grid",
    justifyItems: "end",
    alignItems: "center",
    px: 25,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

      }}

    >
      <Paper
        elevation={10}
        sx={{ width: "100%", maxWidth: 520,height:690, borderRadius: 2, overflow: "hidden", marginBottom: 0 }}
      >
        <LoginHeader />
        <Box sx={{ p: 6 }}>
          <LoginForm />
        </Box>
      </Paper>
    </Box>
  );
}
