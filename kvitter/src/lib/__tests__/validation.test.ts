import { describe, expect, it } from "vitest";

describe("validateUsername", () => {
  it("godtar et gyldig brukernavn", () => {
    expect(validateUsername("ola_normann")).toEqual({ ok: true });
  });

  it("avviser brukernavn kortere enn 3 tegn", () => {
    expect(validateUsername("ab").ok).toBe(false);
  });

  (it("avviser brukernavn lengre enn 20 tegn"),
    () => {
      expect(validateUsername("a".repeat(21)).ok).toBe(false);
    });

  (it("avviser brukernavn med spesialtegn"),
    () => {
      expect(validateUsername("ola@normann!").ok).toBe(false);
    });
});
function validateUsername(arg0: string): any {
  throw new Error("Function not implemented.");
}
