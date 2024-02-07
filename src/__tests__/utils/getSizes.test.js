const { getSizes } = require("../../utils");

describe("getSizes", () => {
  test("when passed an empty array, returns an empty array", () => {
    const output = getSizes([]);

    expect(output).toEqual([]);
  });
  test("has properties of id and title", () => {
    const input = ["md"];

    const output = getSizes(input);

    output.forEach((sizeInfo) => {
      expect(sizeInfo).toHaveProperty("id");
      expect(sizeInfo).toHaveProperty("title");
    });
  });
  test("wrong entries wont work", () => {
    const input = ["ml"];

    const output = getSizes(input);

    expect(output).toHaveLength(0);
  });
  test("original array wont be mutated", () => {
    const input = ["sm", "md", "lg", "gt"];

    const output = getSizes(input);

    expect(input).toEqual(["sm", "md", "lg", "gt"]);
  });
});
