import { Box, Paper } from "@mui/material";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 2,
        background:
          "radial-gradient(1200px circle at 10% 10%, rgba(25,118,210,.12), transparent 40%), radial-gradient(900px circle at 90% 20%, rgba(156,39,176,.12), transparent 35%), linear-gradient(#fff, #fafafa)",
      }}
    >
      <Paper
        elevation={10}
        sx={{ width: "100%", maxWidth: 500, borderRadius: 2, overflow: "hidden",marginBottom:0 }}
      >
        <LoginHeader />
        <Box sx={{ p: 7 }}>
          <LoginForm />
        </Box>
      </Paper>
    </Box>
  );
}
