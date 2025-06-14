test("GET to /api/v1/health should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/health");
  expect(response.status).toBe(200);
});
test("GET to /api/v1/health should return update_at", async () => {
  const response = await fetch("http://localhost:3000/api/v1/health");
  const updateAt = new Date().toISOString();
  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();
  expect(new Date(responseBody.update_at).toString()).not.toBe("Invalid Date");
});

test("GET to /api/v1/health should return active connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/health");
  const responseBody = await response.json();
  expect(responseBody.active_connections).toBeDefined();
  expect(responseBody.active_connections).toBe(1);
});

test("GET to /api/v1/health should return version", async () => {
  const response = await fetch("http://localhost:3000/api/v1/health");
  const responseBody = await response.json();
  expect(responseBody.version).toBeDefined();
  expect(responseBody.version).toMatch(/16.0/);
});

test("GET to /api/v1/health should return max connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/health");
  const responseBody = await response.json();
  expect(responseBody.max_connections).toBeDefined();
  expect(responseBody.max_connections).toBe(100);
});
