import { describe, expect, it } from "vitest";
import { validatePost, validateUsername } from "../validation";

describe("validateUsername", () => {
  it("godtar et gyldig brukernavn", () => {
    expect(validateUsername("ola_normann")).toEqual({ ok: true });
  });

  it("avviser brukernavn kortere enn 3 tegn", () => {
    expect(validateUsername("ab").ok).toBe(false);
  });

  it("avviser brukernavn lengre enn 20 tegn", () => {
    expect(validateUsername("a".repeat(21)).ok).toBe(false);
  });

  it("avviser brukernavn med spesialtegn", () => {
    expect(validateUsername("ola@normann!").ok).toBe(false);
  });

  it("avviser reserverte navn, uavhengig av store bokstaver", () => {
    expect(validateUsername("Admin").ok).toBe(false);
    expect(validateUsername("ROOT").ok).toBe(false);
  });
});

describe("validatePost", () => {
  it("godtar et vanlig innlegg", () => {
    expect(validatePost("Hei, dette er min første kvitring!")).toEqual({
      ok: true,
    });
  });

  it("avviser et tomt innlegg", () => {
    expect(validatePost("").ok).toBe(false);
  });

  it("avviser et innlegg som bare er mellomrom", () => {
    expect(validatePost("   \n\t  ").ok).toBe(false);
  });

  it("godtar et innlegg på nøyaktig 280 tegn", () => {
    expect(validatePost("a".repeat(280)).ok).toBe(true);
  });

  it("avviser et innlegg lengre enn 280 tegn", () => {
    expect(validatePost("a".repeat(281)).ok).toBe(false);
  });
});

/*

describe("formatTimestamp", () => {
  const naa = new Date("2026-09-04T12:00:00Z");

  it("sier 'akkurat nå' for noe helt ferskt", () => {
    expect(formatTimestamp(new Date("2026-09-04T11:59:30Z"), naa)).toBe(
      "akkurat nå",
    );
  });

  it("teller minutter", () => {
    expect(formatTimestamp(new Date("2026-09-04T11:45:00Z"), naa)).toBe(
      "for 15 minutter siden",
    );
  });

  it("bruker entall for 1 time", () => {
    expect(formatTimestamp(new Date("2026-09-04T11:00:00Z"), naa)).toBe(
      "for 1 time siden",
    );
  });

  it("teller timer", () => {
    expect(formatTimestamp(new Date("2026-09-04T10:00:00Z"), naa)).toBe(
      "for 2 timer siden",
    );
  });

  it("sier 'i går' for omtrent et døgn siden", () => {
    expect(formatTimestamp(new Date("2026-09-03T12:00:00Z"), naa)).toBe(
      "i går",
    );
  });

  it("teller dager når det er lenger siden", () => {
    expect(formatTimestamp(new Date("2026-09-01T12:00:00Z"), naa)).toBe(
      "for 3 dager siden",
    );
  });
});
*/
