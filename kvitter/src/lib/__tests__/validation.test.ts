import { describe, expect, it } from "vitest";
import { validateUsername } from "../validation";

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

  (it("avviser reserverte navn, uavhengig av store bokstaver"),
    () => {
      expect(validateUsername("Admin").ok).toBe(false);
      expect(validateUsername("ROOT").ok).toBe(false);
    });
});
