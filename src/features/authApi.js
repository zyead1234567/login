export async function loginRequest(values) {
  // بدّل ده بالـ API الحقيقي عندك
  await new Promise((r) => setTimeout(r, 900));

  if (values.email !== "test@test.com" || values.password !== "123456") {
    const err = new Error("بيانات الدخول غير صحيحة");
    err.status = 401;
    throw err;
  }

  return { token: "fake-token" };
}
