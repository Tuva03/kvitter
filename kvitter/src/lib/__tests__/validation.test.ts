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

  (it("avviser reserverte navn, uavhengig av store bokstaver"),
    () => {
      expect(validateUsername("Admin").ok).toBe(false);
      expect(validateUsername("ROOT").ok).toBe(false);
    });
});

type ValidationResult = { ok: true } | { ok: false; error: string };

const RESERVED_USERNAMES = new Set(["admin", "root", "system", "kvitter"]);

function validateUsername(username: string): ValidationResult {
  if (username.length < 2) {
    return { ok: false, error: "Brukernavnet er for kort" };
  }

  if (username.length > 20) {
    return { ok: false, error: "Brukernavnet er for langt" };
  }

  if (!/^[A-Za-z0-9_]+$/.test(username)) {
    return { ok: false, error: "Brukernavnet inneholder ugyldige tegn" };
  }
  if (RESERVED_USERNAMES.has(username.toLowerCase())) {
    return { ok: false, error: "Brukernavn er reservert" };
  }

  return { ok: true };
}
