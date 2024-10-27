import { expect } from "chai";
import calculateTax from "../taxCalculator"; // TypeScript will auto-resolve `.ts` files

describe("Tax Calculator", () => {
  it("should return 0 tax for earnings less than 12,000", () => {
    expect(calculateTax(11000)).to.equal(0);
  });

  it("should return 20% tax on the amount over 12,000 for earnings between 12,000 and 36,000", () => {
    expect(calculateTax(20000)).to.equal((20000 - 12000) * 0.2);
  });

  it("should return 20% tax on 24,000 and 40% on the rest for earnings over 36,000", () => {
    expect(calculateTax(40000)).to.equal((24000 * 0.2) + ((40000 - 36000) * 0.4));
  });
});
