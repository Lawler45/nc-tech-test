const req = require("supertest");
const { app } = require("../server");

describe("/cards", () => {
  test("GET 200: Responds with status 200 when requesting from /cards endpoint", async () => {
    const res = await req(app).get("/cards");
    expect(res.status).toBe(200);
  });
  test("GET: 200 Responds with an array of card objects that have correct propeties", async () => {
    const res = await req(app).get("/cards");
    const { cards } = res.body;
    expect(cards).toHaveLength(3);
    cards.forEach((card) => {
      expect(card).toHaveProperty("card_id");
      expect(card).toHaveProperty("title");
      expect(card).toHaveProperty("imageUrl");
    });
  });
});

describe("/cards/:cardId", () => {
  test("GET 200: Responds with status 200 when requesting from /cards/:cardId endpoint", async () => {
    const res = await req(app).get("/cards/card001");

    expect(res.status).toBe(200);
  });
  test("GET 200: Responds with an array of objects with correct properties", async () => {
    const res = await req(app).get("/cards/card001");
    const { card } = res.body;
    expect(card).toHaveProperty("title", "card 1 title");
    expect(card).toHaveProperty("imageUrl", "/front-cover-portrait-1.jpg");
    expect(card).toHaveProperty("card_id", "card001");
    expect(card.card).toHaveProperty("base_price", 200);
  });
});
