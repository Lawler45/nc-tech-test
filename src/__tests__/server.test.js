const req = require("supertest");
const { app } = require("../server");

describe("/cards", () => {
  test("GET 200: Responds with status 200 when requesting from /cards endpoint", async () => {
    const res = await req(app).get("/cards");
    expect(res.status).toBe(200);
  });
});
