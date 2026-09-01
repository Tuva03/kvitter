const RESERVED = ["admin", "root"];

export function validateUsername(username: string): { ok: boolean; error?: string } {
  if (username.length < 3) return { ok: false, error: "For kort" };
  if (username.length > 20) return { ok: false, error: "For langt" };
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return { ok: false, error: "Ugyldige tegn" };
  if (RESERVED.includes(username.toLowerCase())) return { ok: false, error: "Reservert navn" };
  return { ok: true };
}
