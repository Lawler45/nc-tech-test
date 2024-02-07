const Card = require("../classes/card");

describe("Card", () => {
  test("Ensure that a new card instance is correctly created using the Card class.", () => {
    const TestCard = new Card();

    expect(TestCard).toBeInstanceOf(Card);
  });
  test("new object has the correct properties and values", () => {
    const TestCard = new Card("Test Title", "Test ImageUrl", "Card001");

    expect(TestCard.title).toBe("Test Title");
    expect(TestCard.imageUrl).toBe("Test ImageUrl");
    expect(TestCard.card_id).toBe("Card001");
  });
});
