const req = require("supertest");
const { app } = require("../server");

describe("/cards", () => {
  test("GET 200: Responds with status 200 when requesting from /cards endpoint", async () => {
    const res = await req(app).get("/cards");
    expect(res.status).toBe(200);
  });
  test("GET: 200 Responds with an array of card objects that have correct propeties", async () => {
    const res = await req(app).get("/cards");
    console.log(res.body)
    const { cards } = res.body;
    console.log(cards);
    expect(cards).toHaveLength(3);
    cards.forEach((card) => {
      expect(card).toHaveProperty("card_id");
      expect(card).toHaveProperty("title");
      expect(card).toHaveProperty("imageUrl");
    });
  });
});
