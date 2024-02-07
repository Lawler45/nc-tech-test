const { Card } = require("../../classes/card");
const { formatCards } = require("../../utils");

describe("formatCards", () => {
  test("returns an empty array when passed an empty array", () => {
    const output = formatCards([]);

    expect(output).toEqual([]);
  });
  test("returns an object with title imageurl and card_id", () => {
    const cards = [
      {
        id: "card001",
        title: "card 1 title",
        sizes: ["sm", "md", "gt"],
        basePrice: 200,
        pages: [
          {
            title: "Front Cover",
            templateId: "template001",
          },
          {
            title: "Inside Left",
            templateId: "template002",
          },
          {
            title: "Inside Right",
            templateId: "template003",
          },
          {
            title: "Back Cover",
            templateId: "template004",
          },
        ],
      },
    ];
    const idUrlObj = { template001: "/front-cover-portrait-1.jpg" };
    const output = formatCards(cards, idUrlObj);

    output.forEach((card, index) => {
      expect(card).toHaveProperty("title");
      expect(card).toHaveProperty("imageUrl");
      expect(card).toHaveProperty("card_id");
    });
  });
  test("returns the correct values for each property", () => {
    const cards = [
      {
        id: "card001",
        title: "card 1 title",
        sizes: ["sm", "md", "gt"],
        basePrice: 200,
        pages: [
          {
            title: "Front Cover",
            templateId: "template001",
          },
          {
            title: "Inside Left",
            templateId: "template002",
          },
          {
            title: "Inside Right",
            templateId: "template003",
          },
          {
            title: "Back Cover",
            templateId: "template004",
          },
        ],
      },
    ];
    const idUrlObj = { template001: "/front-cover-portrait-1.jpg" };
    const output = formatCards(cards, idUrlObj);

    expect(output).toEqual([
        {
          card_id: "card001",
          imageUrl: "/front-cover-portrait-1.jpg",
          title: "card 1 title",
        },
      ]);  });
      test("doesnt mutate the original cards array", () => {
        const cards = [
          {
            id: "card001",
            title: "card 1 title",
            sizes: ["sm", "md", "gt"],
            basePrice: 200,
            pages: [
              {
                title: "Front Cover",
                templateId: "template001",
              },
              {
                title: "Inside Left",
                templateId: "template002",
              },
              {
                title: "Inside Right",
                templateId: "template003",
              },
              {
                title: "Back Cover",
                templateId: "template004",
              },
            ],
          },
        ];
        const idUrlObj = { template001: "/front-cover-portrait-1.jpg" };
        formatCards(cards, idUrlObj);
    
        expect(cards).toEqual([
            {
              id: "card001",
              title: "card 1 title",
              sizes: ["sm", "md", "gt"],
              basePrice: 200,
              pages: [
                {
                  title: "Front Cover",
                  templateId: "template001",
                },
                {
                  title: "Inside Left",
                  templateId: "template002",
                },
                {
                  title: "Inside Right",
                  templateId: "template003",
                },
                {
                  title: "Back Cover",
                  templateId: "template004",
                },
              ],
            },
          ]); 
     });
});
