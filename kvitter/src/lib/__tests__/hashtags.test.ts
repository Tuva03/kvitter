import { describe, expect, it } from "vitest";
import { extractHashtags } from "../hashtag";

(describe("extractHashtags"),
  () => {
    (it("finner enkle hashtags"),
      () => {
        expect(extractHashtags("Lærer #koding i dag")).toEqual(["koding"]);
      });

    (it("gjør dem til små bokstaver"),
      () => {
        expect(extractHashtags("#koding og #KODING")).toEqual(["koding"]);
      });

    (it("fjerner duplikater, men beholder rekkefølgen"),
      () => {
        expect(extractHashtags("#b #a #b")).toEqual(["b", "a"]);
      });

    (it("tar maks 5"),
      () => {
        expect(extractHashtags("#a #b #c #d #e #f")).toHaveLength(5);
      });

    (it("plukker ikke opp # midt i et ord"),
      () => {
        expect(extractHashtags("C#-utvikler")).toEqual([]);
      });
  });
