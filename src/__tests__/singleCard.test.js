const Card = require("../classes/card");
const SingleCard = require("../classes/SingleCard");

describe("SingleCard", () => {
  test("Ensure that a new card instance is correctly created using the Card class.", () => {
    const TestCard = new SingleCard();

    expect(TestCard).toBeInstanceOf(Card);
  });
  test("new object has the correct properties and values", () => {

    const TestCard = new SingleCard(
      "Title A",
      "http://image.com",
      "card009",
      200,
      [{ id: "sm", title: "Small" }],
      [{ title: "Front Cover", templateId: "template001" }]
    );
    expect(TestCard.title).toBe("Title A");
    expect(TestCard.imageUrl).toBe("http://image.com");
    expect(TestCard.card_id).toBe("card009");
    expect(TestCard.base_price).toBe(200);
    expect(TestCard.availableSizes).toEqual([{ id: "sm", title: "Small" }]);
    expect(TestCard.pages).toEqual([
      { title: "Front Cover", templateId: "template001" },
    ]);
  });
});
