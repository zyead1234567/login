import { Box, Link } from "@mui/material";

export default function LoginLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 1,
        mb: 2,
      }}
    >
      <Link href="#" underline="hover" variant="body2">
        نسيت كلمة المرور؟
      </Link>
      <Link href="#" underline="hover" variant="body2">
        إنشاء حساب
      </Link>
    </Box>
  );
}
