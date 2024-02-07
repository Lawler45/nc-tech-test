const request = require("supertest");
const { app } = require("../server");

describe("/cards", () => {
  test("GET 200: Responds with status 200 when requesting from /cards endpoint", async () => {
    const res = await request(app).get("/cards");
    expect(res.status).toBe(200);
  });
});
