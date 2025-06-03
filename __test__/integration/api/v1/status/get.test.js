test("GET to /api/v1/health should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/health");
  expect(response.status).toBe(200);
});
