const { getImageUrl } = require("../../utils.js");

describe("getImageUrl", () => {
  test("returns an empty object wen passed an empty array", () => {
    const output = getImageUrl([]);

    expect(output).toEqual({});
  });
  test("returns an object", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
    ];

    const output = getImageUrl(input);

    expect(output).toBeInstanceOf(Object);
  });
  test("should return an object with id and url as key:value pair", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
    ];

    const id = input[0].id;
    const imageUrl = input[0].imageUrl;

    const output = getImageUrl(input);

    expect(output).toHaveProperty(id, imageUrl);
  });
  test("when passed multiple obkects it should return an object with multiple id and url as key:value pairs", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
      {
        id: "template002",
        width: 300,
        height: 600,
        imageUrl: "",
      },
      {
        id: "template003",
        width: 300,
        height: 600,
        imageUrl: "",
      },
    ];

    const output = getImageUrl(input);

    expect(output).toEqual({
      template001: "/front-cover-portrait-1.jpg",
      template002: "",
      template003: "",
    });
  });
  test("shouldnt mutate original array", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
    ];

    const output = getImageUrl(input);

    expect(input).toEqual([
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
    ]);
  });
});
